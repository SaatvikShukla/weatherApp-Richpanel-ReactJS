import React, { useEffect, useState } from 'react';
import { getWeatherDetailsFromLocation } from "./DataHandler.service";
import ShowIfPropTrue from "../../utils/ShowIfPropTrue";
import WeeklyForecast from "../WeeklyForecast";

export default function DataHandler({
  latLong
}) {

  const [weatherData, setWeatherData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getWeatherDetailsFromLocation({ lattitude: latLong.lattitude, longitude: latLong.longitude }).then((resp) => {
      setWeatherData(resp);
      setShowLoader(false);
    })
  }, []);


  return (
    <>
      <ShowIfPropTrue prop={showLoader}>
        <>fetching...</>
      </ShowIfPropTrue>
      <ShowIfPropTrue prop={!showLoader}>
        <>
          Location is received, fetching data
          <div>
            {/* {JSON.stringify(weatherData)} */}
            {/* <HeaderSearch /> */}
            <WeeklyForecast dailyData={weatherData.daily} />
            {/* <CurrentWeatherCard /> */}
          </div>
        </>
      </ShowIfPropTrue>

    </>
  );
}