import React, { useEffect, useState } from 'react';
// import ShowIfPropTrue from "../../utils/ShowIfPropTrue";
import moment from 'moment';
import "./index.css";

export default function WeeklyForecast({
  dailyData
}) {
  console.log(dailyData);
  const epochToDate = (targetDate) => {
    return moment.unix(targetDate).format('dddd')
  };


  return (
    <>
      <div className="cardWrapper">
        {dailyData && dailyData.map((item) => {
          return (
            <>
              <div className="dailyForeCastCard">
                <p>{item.temp.min}</p>
                <p>{item.temp.max}</p>
                <p>{epochToDate(item.dt)}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}