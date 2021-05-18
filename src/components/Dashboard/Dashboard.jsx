import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TickerCard from '../Dashboard/TickerCard/TickerCard';


const useStyles = makeStyles({
  root: {
    // display: 'flex',
    margin: '20px',
  },
  tickerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  
  
});


const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.tickerContainer}>
        <TickerCard />
      </div>
    </div>
  )
}

export default Dashboard
