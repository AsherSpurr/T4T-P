import "./Landing.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import Locations from "../locations/Locations";
import Map from "../map/Map";
import { fetchBRsByLoc } from "../../apiCalls";
import LoadingContext from "../../LoadingContext";

const Landing = ({ updateLocs, filteredLocs, updateFilters,}) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isLoading, setIsLoading] = useState("loading");

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
            console.log(locs)
            setIsLoading("");
            updateLocs(locs);
          } else {
            console.log(data)
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

  return (
    <LoadingContext.Provider value={isLoading}>
      <div className="Landing_wrapper">
        <div className="Landing_left_wrapper">
          <h2 className="Landing_h2">Where do you want to 'go'?</h2>
          <Search setLatLonState={setLatLonState}/>
          <Filter updateFilters={updateFilters}/>
          <Locations filteredLocs={filteredLocs} isLoading={isLoading} />
        </div>
        <div className="Landing_map_wrapper">
          <Map />
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default Landing;
