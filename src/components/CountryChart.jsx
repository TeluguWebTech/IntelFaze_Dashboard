import React from 'react';
import Flag from 'react-world-flags';

import "../css/countrygraph.css"

const countryData = [
  { country: 'Russia', code: 'RU', value: 80 },
  { country: 'Australia', code: 'AU', value: 60 },
  { country: 'Algeria', code: 'DZ', value: 40 },
  { country: 'China', code: 'CN', value: 90 },
];

const CountryGraph = () => {
  return (
    <div className="country-graph">
      {countryData.map((data, index) => (
        <div key={index} className="country-bar">
          <div className="country-info">
            <Flag code={data.code} style={{ width: '25px', height: '25px' }} />
            <span className="country-name">{data.country}</span>
          </div>
          <div className="bar-container">
            <div
              className="bar"
              style={{ width: `${data.value}%`, backgroundColor: '#007bff' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryGraph;
