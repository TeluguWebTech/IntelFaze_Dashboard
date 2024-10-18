import React from 'react'
import TopBar from '../components/TopBar'
import TileComp from '../components/TileComp'
import RevenueChart from '../components/RevenueChart'
import SemiTiles from '../components/SemiTiles'

const Layout = () => {
  return (
    <div className='layoutSection'>
      <TopBar />
      <TileComp />
      <RevenueChart />
      <SemiTiles />
    </div>
  )
}

export default Layout