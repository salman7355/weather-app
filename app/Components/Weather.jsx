import Image from "next/image";
import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[85vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{weather.weather[0].description}</p>
        </div>
        <div className="text-9xl">{weather.main.temp.toFixed(0)}&#176;</div>
      </div>

      <div className="bg-black/50 text-gray-200 mb-10 p-8 rounded-xl">
        <p className="text-center font-bold pb-6 text-2xl">
          Weather in {weather.name}
        </p>
        <div className="flex justify-between text-center text-xl font-bold">
          <div>
            <p>{weather.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feel Likes</p>
          </div>
          <div>
            <p>{weather.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{weather.wind.speed.toFixed(0)} MPS</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
