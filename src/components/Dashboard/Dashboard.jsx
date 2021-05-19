import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TickerCard from '../Dashboard/TickerCard/TickerCard';
import WatchList from '../Dashboard/WatchList/WatchList';
import BubbleChart from '../Dashboard/BubbleChart/BubbleChart';
import Tabs from './ChartTabs/ChartTabs';
import SnippetsCarousel from '../Dashboard/SnippetsCarousel/SnippetsCarousel';
import ArticleTabs from '../Dashboard/ArticleTabs/ArticleTabs';


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
  },
  CarouselContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
    margin: '20px 0px 20px 0px',
    borderRadius: '5px',
    // border: '2px solid black',
    // flexWrap: 'nowrap',
  },
  carousel: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '350px',
    margin: '20px 0px 20px 0px',
    padding: '10px',
    borderRadius: '5px',
    // boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
    
  },
  carouselHeaders: {
    padding: '20px',
    margin: '10px',
    color: 'gray',
    
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
        <div className={classes.watchlistContainer}>
          <h4 className={classes.title}>Watchlist</h4>
          <WatchList />
        </div>
      </div>
      <div className={classes.CarouselContainer}>
        <div className={classes.carousel}>
        <h3 className={classes.carouselHeaders}>Check out the top trending tweets</h3>
          <SnippetsCarousel />
        </div>
      </div>

      <div>
        <ArticleTabs />
      </div>
    </div>
  )
}

export default Dashboard
