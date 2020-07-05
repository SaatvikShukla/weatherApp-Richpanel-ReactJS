import React, { useEffect, useState } from 'react';
// import ShowIfPropTrue from "../../utils/ShowIfPropTrue";
import moment from 'moment';
import "./index.css";

export default function WeeklyForecast({
  dailyData
}) {
  const epochToDate = (targetDate) => {
    return moment.unix(targetDate).format('ddd')
  };
  function roundToTwoDecimal(number) {
    try {
      return Number(Number(number).toFixed(0));
    } catch (err) {
      console.log('err', err);
      return 0;
    }
  }

  return (
    <>
      <div className="cardWrapper">
        {dailyData && dailyData.map((item) => {
          return (
            <>
              <div className="dailyForeCastCard">
                <div>{epochToDate(item.dt)}</div>
                <div className="minMaxWrapper">
                  <div className="minMaxTemp">{roundToTwoDecimal(item.temp.min) + "°"}</div>
                  <div className="minMaxTemp">{roundToTwoDecimal(item.temp.max) + "°"}</div>
                </div>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                <div>{item.weather[0].main}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}