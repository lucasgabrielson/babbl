import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TickerCard from '../Dashboard/TickerCard/TickerCard';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '400px',
    height: '75px',
    border: '2px solid gray',
    borderRadius: '5px'
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Dashboard = () => {

  const classes = useStyles();

  return (
    <div>
      <header>
        <h1>This is Dashboard</h1>
      </header>
      <div className="tickerContainer">
        <TickerCard />
      </div>
    </div>
  )
}

export default Dashboard
