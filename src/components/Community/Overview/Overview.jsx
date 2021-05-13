import React from 'react'


import TopMovers from '../Overview/TopMovers/TopMovers';
import BottomMovers from '../Overview/BottomMovers/BottomMovers';


const Overview = () => {
  return (
    <div className="overview">
      <TopMovers />
      <BottomMovers />
    </div>
  )
}

export default Overview
