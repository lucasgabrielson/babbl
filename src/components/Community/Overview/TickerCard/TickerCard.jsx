import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '400px',
    height: '50px',
    border: '2px solid gray',
    borderRadius: '5px'
  },

});

export default function SimpleCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ticker = useSelector((store)=> {return store.tickers})
  
  React.useEffect (() => {
    dispatch({type: 'FETCH_TICKERS', payload: {ticker: 1}});
  }, []); 
  
console.log('ticker tesla', ticker);
  return (
    <div className={classes.root}>
      <h3>TSLA</h3>
      <h5>${ticker.current_price}</h5>
      <h5>{ticker.percent_change}%</h5>
      <h5>{ticker.points_change}</h5>
    </div>
  );
}