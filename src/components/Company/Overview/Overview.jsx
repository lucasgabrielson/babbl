import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Charts from  '../Charts/Charts';
import TopTen from '../TopTen/TopTen';
import CompanySnippets from '../CompanySnippets/CompanySnippets';
import Articles from '../Articles/Articles';
import TickerCard from '../TickerCard/TickerCard';



const useStyles = makeStyles((theme) => ({
 
  overview: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '80px'
    
    
  }, 
  carousel: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90vw',
    height: '350px',
    margin: '20px 0px 20px 0px',
    padding: '10px',
    borderRadius: '5px',
    
    
    
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
  },
  chartMovers: {
    display: 'flex',
    borderRadius: '5px',
    boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
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
  },
  tickerCard:{
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
}));


const Overview = () => {

  const classes = useStyles();

  return (
    <div className={classes.overview}>
        <div className={classes.tickerCard}>
        <TickerCard />
        </div>
        <div className={classes.chartAndTen}>
        <div className={classes.chartMovers}>
          <div className={classes.middle}>
            <div className={classes.bubbleChartContainer}>
              <Charts />
            </div>
          </div>
          <div className={classes.TopTenContainer}>
            <TopTen />
          </div>
        </div>
        </div>
        <div className={classes.CarouselContainer}>
          <div className={classes.carousel}>
            <h1 className={classes.carouselHeaders}>Check out the top trending tweets</h1>
              <CompanySnippets />
              <h1 className={classes.carouselHeaders}>Bookmark the article where the snippet originated</h1>
          </div>
        </div>
        <Articles />
    </div>
    
  )
}

export default Overview
