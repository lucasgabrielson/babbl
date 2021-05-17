import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TopMovers from '../Overview/TopMovers/TopMovers';
import BottomMovers from '../Overview/BottomMovers/BottomMovers';
import BubbleChart from  '../Overview/BubbleChart/BubbleChart';
import TopTen from '../Overview/TopTen/TopTen';
import SnippetsCarousel from '../Overview/SnippetsCarousel/SnippetsCarousel';



const useStyles = makeStyles((theme) => ({
 
  overview: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flexDirection: 'column',
  }, 
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '800px',
    height: '350px',
    margin: '20px',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
  },
  topThreeItemsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'nowrap',
  },
  movers: {
    display:'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bubbleChartContainer: {
    display: 'flex',
    flexGrow: 3,
    margin: '0px 20px 0px 20px',
    border: '1px solid white',
    borderRadius: '4px',
    boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
  },
  TopTenContainer: {
    display:'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  middle: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  snippets: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } 
}));


const Overview = () => {

  const classes = useStyles();

  return (
    <div className={classes.overview}>
      
        <div className={classes.movers}>
          <h3>Top Movers</h3>
          <TopMovers />
          <BottomMovers />
        </div>
        <div className={classes.middle}>
          <h3>Sentiment Chart</h3>
          <div className={classes.bubbleChartContainer}>
            <BubbleChart />
          </div>
        </div>
        <div className={classes.TopTenContainer}>
          <h3>Top Ten Movers</h3>
          <TopTen />
        </div>
        <div className={classes.topThreeItemsContainer}>
          <div className={classes.carousel}>
              <SnippetsCarousel />
          </div>
        </div>
     
    </div>
    
  )
}

export default Overview
