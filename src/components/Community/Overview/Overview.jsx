import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import TopMovers from '../Overview/TopMovers/TopMovers';
import BottomMovers from '../Overview/BottomMovers/BottomMovers';
import BubbleChart from  '../Overview/BubbleChart/BubbleChart';
import LineChart from '../Overview/LineChart/LineChart';
import TopTen from '../Overview/TopTen/TopTen';
import SnippetsCarousel from '../Overview/SnippetsCarousel/SnippetsCarousel';
import News from '../News/News';



const useStyles = makeStyles((theme) => ({
 
  overview: {
   
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // marginTop: '80px'
    // border: '2px solid black',
    
    
    // flexDirection: 'column',
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
  CarouselContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
    margin: '20px 0px 20px 0px',
    borderRadius: '5px',
    // border: '2px solid black',
    // flexWrap: 'nowrap',
  },
  chartMovers: {
    display: 'flex',
    borderRadius: '5px',
    // boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
    width: '100%',
    minWidth: 'fit-content'
  },
  movers: {
    display:'flex',
    flexGrow: 1,
    marginLeft: '20px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bubbleChartContainer: {
    display: 'flex',
    flexGrow: 3,
    margin: '0px 20px 0px 20px',
    border: '1px solid white',
    borderRadius: '4px',
    
    // boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
  },
  TopTenContainer: {
    display:'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth:'250px',
  },
  middle: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  chartAndTen: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    
  },
  snippets: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carouselHeaders: {
    padding: '20px',
    margin: '10px',
    color: 'gray',
    
  }
}));


const Overview = () => {

  const classes = useStyles();
  

  const ticker_snippets = useSelector((store) => store.ticker_snippets);

  return (
    <div className={classes.overview}>
      
        {/* <div className={classes.movers}>
          <h3>Daily Movers</h3>
          <TopMovers />
          <BottomMovers />
        </div> */}
        <div className={classes.chartAndTen}>
        
        <div className={classes.chartMovers}>
        <div className={classes.movers}>
          <h3>Daily Movers</h3>
          <TopMovers />
          <BottomMovers />
        </div>
          <div className={classes.middle}>
            
            <div className={classes.bubbleChartContainer}>
           
              <BubbleChart />
            </div>
          </div>
          <div className={classes.TopTenContainer}>
          <h3>Top Mentions</h3>
            <TopTen />
          </div>
        </div>
        </div>
        <h3 className={classes.carouselHeaders}>Check out the top trending article snippets</h3>
        {/* <hr /> */}
        <div className={classes.CarouselContainer}>
          <div className={classes.carousel}>
            
              <SnippetsCarousel />
              
          </div>
        </div>
        <News />
       
    </div>
    
  )
}

export default Overview
