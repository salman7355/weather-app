import React, { useState } from "react";
import { getData, specificCountry } from "@/redux/CounterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ActionBar = () => {
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const { weather } = useSelector((state) => state.counter);

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  const spCity = (city) => {
    dispatch(specificCountry(city));
  };

  return (
    <div>
      <div className="flex justify-center p-4 m-2 ">
        <input
          style={{ borderRadius: "15px" }}
          className="text-black w-[20rem] p-1 outline-none focus:border-none"
          type="search"
          placeholder="Search City"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className=" text-center py-3 text-white">
        <h1 className="text-5xl py-2">Cairo, EN</h1>
        <p className="text-gray-400 text-lg">Wednesday 12 october 2022</p>
      </div>
      {/* <button onClick={() => spCity(country)}>change city</button> */}
    </div>
  );
};

export default ActionBar;
