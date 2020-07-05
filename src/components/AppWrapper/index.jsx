import React, { useEffect, useState } from 'react';
import './index.css';
import { getUserLocationDetails } from "./AppWrapper.service";
import DataHandler from "../DataHandler";
import ShowIfPropTrue from "../../utils/ShowIfPropTrue";

export default function AppWrapper() {

  const [showLoader, setShowLoader] = useState(true);
  const [latLong, setLatLong] = useState();
  useEffect(() => {
    setShowLoader(true);
    // console.log(navigator);
    // if ("geolocation" in navigator && navigator.geolocation !== {}) {
    //   // check if geolocation is supported/enabled on current browser
    //   navigator.geolocation.getCurrentPosition(
    //     function success(position) {
    //       // for when getting location is a success
    //       console.log('latitude', position.coords.latitude,
    //         'longitude', position.coords.longitude);
    //       setShowLoader(false);
    //       setLatLong({
    //         lattitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       });
    //     },
    //     function error(error_message) {
    //       // for when getting location results in an error
    //       console.error('An error has occured while retrieving location', error_message);
    //     }
    //   );
    // } else {
    // geolocation is not supported
    // get your location some other way
    console.log('geolocation is not enabled on this browser')
    getUserLocationDetails().then((resp) => {
      setLatLong({
        lattitude: resp.latitude,
        longitude: resp.longitude
      });
      setShowLoader(false);
    })

    // }
  }, []);

  return (
    <>
      <div className={"AppWrapper"}>
        <ShowIfPropTrue prop={showLoader}>
          <>Fetching location</>
        </ShowIfPropTrue>
        <ShowIfPropTrue prop={!showLoader}>
          <>
            {/* Fetching data, loader */}
            <DataHandler latLong={latLong} />
          </>
        </ShowIfPropTrue>

      </div>
    </>
  );
}