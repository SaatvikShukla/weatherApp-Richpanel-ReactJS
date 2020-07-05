import React, { useEffect, useState } from 'react';
import { getWeatherDetailsFromLocation } from "./DataHandler.service";
import ShowIfPropTrue from "../../utils/ShowIfPropTrue";
import WeeklyForecast from "../WeeklyForecast";
import CurrentWeatherCard from "../CurrentWeatherCard";
import HeaderSearch from "../HeaderSearch";

export default function DataHandler({
  latLong
}) {

  const [weatherData, setWeatherData] = useState([]);
  const [hourlyDataArray, sethourlyDataArray] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (weatherData['hourly']) {
      console.log('running useeffect');
      let _hourlyDataArray = [...hourlyDataArray];
      let _hourlyTemp = [];
      let _hourlyTime = [];
      weatherData['hourly'].forEach((item) => {
        _hourlyTemp.push(item.temp);
        _hourlyTime.push(item.dt);
      })
      sethourlyDataArray({
        temp: _hourlyTemp,
        time: _hourlyTime
      });
    }
  }, [weatherData]);

  useEffect(() => {
    setShowLoader(true);
    getWeatherDetailsFromLocation({ lattitude: latLong.lattitude, longitude: latLong.longitude }).then((resp) => {
      setWeatherData(resp);
      console.log('12345678', resp);
      setShowLoader(false);
    })
  }, []);

  // console.log(weatherData);
  return (
    <>
      <ShowIfPropTrue prop={showLoader}>
        <>fetching...</>
      </ShowIfPropTrue>
      <ShowIfPropTrue prop={!showLoader}>
        <>
          <div>
            <HeaderSearch />
            <WeeklyForecast dailyData={weatherData.daily} />
            <CurrentWeatherCard
              currentData={weatherData.current}
              hourlyDataArray={hourlyDataArray}
            />
          </div>
        </>
      </ShowIfPropTrue>

    </>
  );
}