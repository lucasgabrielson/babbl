import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TickerCard from '../Dashboard/TickerCard/TickerCard';
import WatchList from '../Dashboard/WatchList/WatchList';
import BubbleChart from '../Dashboard/BubbleChart/BubbleChart';
import Tabs from '../Dashboard/Tabs/Tabs';


const useStyles = makeStyles({
  root: {
    maxWidth: '1500px',
    // display: 'flex',
    margin: '20px',
  },
  title: {
    borderBottom: '5px solid gray',
    borderRadius: '5px'
  },
  tickerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  chartContainer: {
    display: 'flex',
     flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  watchlistContainer: {
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  }
  
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
        <div className={classes.watchlistContainer}>
          <h4 className={classes.title}>Watchlist</h4>
          <WatchList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
