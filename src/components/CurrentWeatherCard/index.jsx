import React, { useEffect, useState } from 'react';
import ShowIfPropTrue from "../../utils/ShowIfPropTrue";
import "./index.css";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function CurrentWeatherCard({
  currentData,
  hourlyDataArray
}) {

  useEffect(() => {
  }, []);
  const TemperateMap = () => {
    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          className="chart1"
          type="spline"
          options={{
            title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            xAxis: {
              visible: false,
              reversed: true,
              title: {
                enabled: false,
              },
              showLastLabel: false
            },
            yAxis: {
              reversed: false,
              title: {
                enabled: false,
                text: 'Altitude'
              }
            },
            legend: {
              enabled: false
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              spline: {
                marker: {
                  enable: true
                }
              }
            },
            series: [{
              name: 'Temperature',
              data: hourlyDataArray['temp']
            }]

          }}
        />
      </>
    )
  }

  const CurrentTimeGraph = () => {
    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          className="chart2"
          type="spline"
          options={{
            chart: {
              type: 'areaspline'
            },
            title: {
              text: ''
            },
            legend: {
              visible: false
            },
            xAxis: {
              visible: false
            },
            yAxis: {
              visible: false
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              areaspline: {
                fillOpacity: 0.5
              }
            },
            series: [{
              name: '',
              data: [3, 4, 3, 5, 4, 10, 12]
            }, {
              name: '',
              data: [1, 3, -4, -3, -3, 5, 4]
            }]
          }}
        />
      </>
    );
  }
  console.log('hourlyDataArray', hourlyDataArray);
  return (
    <>
      {currentData && (
        <div className="currentWeatherCard">
          <div className="currentWeatherCard__MainTemp">
            <div style={{ alignSelf: 'center' }}>{currentData.temp + "°C"}</div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} />
            </div>
          </div>
          <div>
            <TemperateMap />
          </div>
          <div className="metaRow">
            <div className="rowWrapper">
              <div className="rowItem">
                Pressure
              </div>
              <div className="rowItem">
                {currentData.pressure + " hpa"}
              </div>

            </div>
            <div className="rowWrapper">
              <div className="rowItem">
                Humidity
              </div>
              <div className="rowItem">
                {currentData.humidity + "%"}
              </div>
            </div>
          </div>
          <div>
            <CurrentTimeGraph />
          </div>
        </div>
      )}
    </>
  );
}