import React from 'react';
import ReactApexChart from 'react-apexcharts';
import TopProduct from './TopProduct';
import { HiArrowUpRight } from "react-icons/hi2";

import "../css/subcharts.css"

const SubCharts = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '45%',
        distributed: true,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(0),
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [
    {
      name: 'Page Views',
      data: [300, 350, 400, 450, 320, 380],
    },
  ];

  return (
    <div className='subChartSection'>
      {/* Page Views Section */}
      <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>👁️ Page Views</h2>
          <div className="chartInfo">
          <h3>26,3812K</h3>
          <div className='infoGraph'>
          <span><HiArrowUpRight className='arrowIcon' /></span> 28%</div>
          </div>
        </div>
        <div className='subApexChart'>
          <ReactApexChart options={chartOptions}
           series={chartSeries} type="bar" height={250} />
        </div>
      </div>
        <div >
      <TopProduct />
        </div>
    </div>
  );
};

export default SubCharts;
