import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TopMovers from '../Overview/TopMovers/TopMovers';
import BottomMovers from '../Overview/BottomMovers/BottomMovers';
import BubbleChart from  '../Overview/BubbleChart/BubbleChart';



const useStyles = makeStyles((theme) => ({
 
  overview: {
    display: 'flex',
    // flexDirection: 'column',
  }, 
  movers: {
    flexDirection: 'column',
  },
  bubbleChartContainer: {
    margin: '20px'
  }
 
}));


const Overview = () => {

  const classes = useStyles();

  return (
    <div className={classes.overview}>
      <div className={classes.movers}>
        <TopMovers />
        <BottomMovers />
      </div>
      <div className={classes.bubbleChartContainer}>
        <BubbleChart />
      </div>
    </div>
  )
}

export default Overview
