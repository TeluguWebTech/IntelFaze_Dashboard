import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { HiArrowUpRight } from "react-icons/hi2";
import SemiTiles from './SemiTiles';

// import "../css/revenuechart.css"
import SubCharts from './SubChart';

const RevenueChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 5.0, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: (val) => `${val}%`,
        }
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2024',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  });

  return (
    <div className='revenueSection'>
      <div id="chart">
      <div>
       <div className="chartTitle">
       <img src='assets/trend.png' />
       <h2>Revenue</h2>
       </div>
         <div className="chartInfo">
         <h3>26,3812K</h3>
         {/* <div className='infoGraph'>
          <span><HiArrowUpRight className='arrowIcon' /></span> 28%</div> */}
         </div>
        </div>
   <div className='revBarChart'>
   <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
   </div>
        {/* <SemiTiles /> */}
      </div>
      <div id="html-dist">
        <SubCharts />
      </div>
    </div>
  );
};

export default RevenueChart;
