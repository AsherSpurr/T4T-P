import "./Landing.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Locations from "../locations/Locations";
import GoogleMap from "../map/Map";
import { fetchBRsByLoc } from "../../apiCalls";

const Landing = ({ updateLocs, filteredLocs, updateFilters, allLocsCoordinates }) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  
  const latS = JSON.parse(sessionStorage.getItem('lat'))
  const lonS = JSON.parse(sessionStorage.getItem('lon'))


  const navigate = useNavigate()

  useEffect(() => {
    if(lat) {
      const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon).then((data) => {
          if (data.length) {
            sessionStorage.setItem('locations', JSON.stringify(data))
            const locs = JSON.parse(sessionStorage.getItem('locations'))
            updateLocs(locs);
          } else {
            const {status, statusText} = data
            navigate('*',{state: {status: status, statusText: statusText}})
          }
        })
      };
      handleBRsByLoc(lat, lon);
    }
  }, [lat, lon]);

  const setLatLonState = () => {
    setLat(latS);
    setLon(lonS);
  }
  const numLat = Number(latS)
  const numLon = Number(lonS)
  const position = {lat: numLat, lng: numLon}


  return (
      <div className="Landing_wrapper">
        <section className="Landing_left_wrapper">
          <h2 className="Landing_h2">Where do you want to 'go'?</h2>
          <Search setLatLonState={setLatLonState}/>
          <Locations filteredLocs={filteredLocs} updateFilters={updateFilters} position={position} allLocsCoordinates={allLocsCoordinates}/>
        </section>
        <section className="Landing_map_wrapper">
        <GoogleMap position={position} allLocsCoordinates={allLocsCoordinates}/>
        </section>
      </div>
  );
};

export default Landing;
