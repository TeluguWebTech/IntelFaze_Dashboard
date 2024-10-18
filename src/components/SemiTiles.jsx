import React from 'react';
import { FaShoppingCart, FaChartLine, FaUserAlt } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';  // Update this line for the correct import
import 'react-tooltip/dist/react-tooltip.css'; // Import CSS if needed for styling

import "../css/semitiles.css"

const SemiTiles = () => {
  return (
    <div className="revenue-cards">
      {/* Total Revenue Card */}
      <div className="revenue-card">
        <div className="card-icon" data-tooltip-id="tooltip-1" data-tooltip-content="User Revenue">
          <FaUserAlt />
          <ReactTooltip id="tooltip-1" place="top" type="dark" effect="solid" />
        </div>
        <div className="card-content">
          <h3>$50,000</h3>
          <p>Total Revenue</p>
        </div>
        <div className="card-menu" data-tooltip-id="tooltip-2" data-tooltip-content="More options">...</div>
        <ReactTooltip id="tooltip-2" place="top" type="dark" effect="solid" />
      </div>

      {/* Revenue Card */}
      <div className="revenue-card">
        <div className="card-icon" data-tooltip-id="tooltip-3" data-tooltip-content="Revenue from Sales">
          <FaShoppingCart />
          <ReactTooltip id="tooltip-3" place="top" type="dark" effect="solid" />
        </div>
        <div className="card-content">
          <h3>$1,250</h3>
          <p>Revenue</p>
        </div>
        <div className="card-menu" data-tooltip-id="tooltip-4" data-tooltip-content="More options">...</div>
        <ReactTooltip id="tooltip-4" place="top" type="dark" effect="solid" />
      </div>

      {/* Growth Card */}
      <div className="revenue-card">
        <div className="card-icon" data-tooltip-id="tooltip-5" data-tooltip-content="Growth Overview">
          <FaChartLine />
          <ReactTooltip id="tooltip-5" place="top" type="dark" effect="solid" />
        </div>
        <div className="card-content">
          <h3>+2.0%</h3>
          <p>Growth</p>
        </div>
        <div className="card-menu" data-tooltip-id="tooltip-6" data-tooltip-content="More options">...</div>
        <ReactTooltip id="tooltip-6" place="top" type="dark" effect="solid" />
      </div>
    </div>
  );
};

export default SemiTiles;
