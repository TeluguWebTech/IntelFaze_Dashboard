import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import WorldMap from './WorldMap';
import '../css/tileSection.css';

const revenueData = [
  { name: 'Week 1', Outerwear: 400, Sweaters: 240, Shirts: 240 },
  { name: 'Week 2', Outerwear: 300, Sweaters: 139, Shirts: 221 },
  { name: 'Week 3', Outerwear: 200, Sweaters: 980, Shirts: 229 },
  { name: 'Week 4', Outerwear: 278, Sweaters: 390, Shirts: 200 },
];

const pageViewsData = [
  { name: 'Day 1', views: 300 },
  { name: 'Day 2', views: 400 },
  { name: 'Day 3', views: 350 },
  { name: 'Day 4', views: 500 },
  { name: 'Day 5', views: 450 },
  { name: 'Day 1', views: 300 },
  { name: 'Day 2', views: 400 },
  { name: 'Day 3', views: 350 },
  { name: 'Day 4', views: 500 },
  { name: 'Day 5', views: 450 },
];

const TileComp = () => {
  return (
    <div className='tileSection'>
      <div className="overview-section">
        <h3>Overview</h3>
        <div className="metrics">
          {/* Tile 1 */}
          <div className="metric-box">
            <div className="metCount">
              <h4>Total Views</h4>
              <div>
                <p>246K</p>
                <small>↓ 13.8%</small>
              </div>
            </div>
            <div className="metricChart">
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={pageViewsData}>
                  <XAxis dataKey="name" hide />
                  <Bar dataKey="views" fill="white" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Tile 2 */}
          <div className="metric-box">
            <div className="metCount">
              <h4>Total Views</h4>
              <div>
                <p>246K</p>
                <small>↓ 13.8%</small>
              </div>
            </div>
            <div className="metricChart">
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={pageViewsData}>
                  <XAxis dataKey="name" hide />
                  <Bar dataKey="views" fill="white" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Tile 3 */}
          <div className="metric-box">
            <div className="metCount">
              <h4>Total Views</h4>
              <div>
                <p>246K</p>
                <small>↓ 13.8%</small>
              </div>
            </div>
            <div className="metricChart">
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={pageViewsData}>
                  <XAxis dataKey="name" hide />
                  <Bar dataKey="views" fill="white" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WorldMap />
      </div>
    </div>
  );
};

export default TileComp;
