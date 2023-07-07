"use client";
import Spinner from "@/Components/Spinner";
import Weather from "@/Components/Weather";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [Loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=67e042512a5a6b7d860856140a0ab4c1&units=metric`;

  const fetchData = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (Loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className="absolute inset-0 bg-black/20  z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          alt="/"
          fill={true}
          className="object-cover"
        />

        <div className="flex justify-center items-center max-w-[500px] w-full m-auto pt-9 px-4 text-white relative z-10">
          <form
            onSubmit={fetchData}
            className="mr-3 px-4 border-solid rounded-2xl border-white border-2 flex justify-between p-3 items-center"
          >
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search City"
              className=" bg-transparent border-none text-white focus:outline-none text-xl"
            />
            <button onClick={fetchData}>
              <AiOutlineSearch color="white" size={30} />
            </button>
          </form>
        </div>

        {weather.main && <Weather weather={weather} />}
      </div>
    );
  }
}
