import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import CountryGraph from "./CountryChart";

import "../css/worldmap.css"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = () => {
  const markers = [
    { name: "Russia", coordinates: [105.3188, 61.524], value: 100 },
    { name: "Australia", coordinates: [133.7751, -25.2744], value: 80 },
    { name: "Algeria", coordinates: [1.6596, 28.0339], value: 50 },
    { name: "China", coordinates: [104.1954, 35.8617], value: 120 }
  ];

  return (
    <>
   
    <div style={{ width: '400px', height: '200px' }} className="worldMapSection">
    <div className="infoLabel">
      <div>Today</div>
      <div>Week</div>
      <div>Month</div>
      <div>Year</div>
    </div>
    <h3 className="countryInfo">Active Users</h3>
    <h3 className="countryInfo">100+</h3>
      <ComposableMap
        projectionConfig={{ scale: 45 }} // Adjust the scale for better fit
        width={200}  // Set width of the map
        height={200} // Set height of the map
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#484848" // Dark color for countries
                stroke="#484848"  // Light stroke for contrast around countries
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, value }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#1E90FF" stroke="#FFF" strokeWidth={1} />
            <text
              textAnchor="middle"
              style={{ fontFamily: "system-ui", fill:"#FFF", fontSize: '3px' }} // White text for better visibility
            >
              {name}: {value}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <div className="">
        <CountryGraph />
      </div>
    </div>
    </>
  );
};

export default WorldMap;
