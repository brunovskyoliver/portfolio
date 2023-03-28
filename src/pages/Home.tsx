import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import "../styles/Home.module.css";
import Blob from './Blob';

const API_KEY = '91b2738f684c1063b4e729983e657fbe';

export default function Home(): JSX.Element {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async (latitude: number, longitude: number) => {
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setWeatherData(data);
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        });
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval: NodeJS.Timeout | null = null;

    const onMouseOver = (event: MouseEvent) => {
      let iteration = 0;

      clearInterval(interval as NodeJS.Timeout);

      interval = setInterval(() => {
        const target = event.target as HTMLHeadingElement;
        if (!target || !target.dataset.value) return;

        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return target.dataset.value![index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if(iteration >= target.dataset.value!.length){ 
          clearInterval(interval as NodeJS.Timeout);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector("h1");
    if (h1Element) {
      h1Element.addEventListener("mouseover", onMouseOver);
    }

    return () => {
      if (h1Element) {
        h1Element.removeEventListener("mouseover", onMouseOver);
      }
      clearInterval(interval as NodeJS.Timeout);
    };
  }, []);

  const renderWeatherInfo = () => {
    if (!weatherData || !weatherData.main) {
      return (
        <p className="text-2x1 font-mono ml-4 md:ml-14">
          Loading weather data...
        </p>
      );
    }
    return (
      <div className="flex flex-col md:flex-row md:mt-15">
        <p className="text-2x1 font-mono ml-4 md:ml-14">
          Current temperature: {weatherData.main.temp}°C
        </p>
        <p className="text-2x1 font-mono ml-4 md:ml-14">
          Feels like: {weatherData.main.feels_like}°C
        </p>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen z-10">
      <div className="flex justify-center md:justify-start p-4 md:p-14 w-full md:w-1/2 z-10">
        <div className="">
        <h1 data-value="Welcome" className="text-2xl md:text-3xl font-mono underline flex items-center justify-center md:justify-start">

            Welcome
          </h1>
          <h2 className="text-xl md:text-2xl font-mono underline md:ml-14">
            to my portfolio!
          </h2>
        </div>
      </div>
      <div className="flex justify-end p-4 md:p-10 w-full md:w-1/2 z-10">
        {renderWeatherInfo()}
      </div>
    </div>
  );
  
  
}
