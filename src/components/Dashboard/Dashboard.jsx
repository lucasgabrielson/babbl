import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TickerCard from '../Dashboard/TickerCard/TickerCard';
import WatchList from '../Dashboard/WatchList/WatchList';
import BubbleChart from '../Dashboard/BubbleChart/BubbleChart';
import Tabs from '../Dashboard/Tabs/Tabs';


const useStyles = makeStyles({
  root: {
    // display: 'flex',
    margin: '20px',
  },
  tickerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  
});


const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.tickerContainer}>
        <TickerCard />
      </div>
      <div className={classes.chartContainer}>
        <Tabs />
        <WatchList />
      </div>
    </div>
  )
}

export default Dashboard
