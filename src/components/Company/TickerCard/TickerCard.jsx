import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


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

export default function TickerCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const ticker = useSelector((store)=> {return store.tickers})
  
  useEffect (() => {
    dispatch({type: 'FETCH_TICKERS', payload: {ticker: params.id}});
  }, []); 
console.log(params);
  return (
    <div className={classes.root}>
      <h3>{params.id}</h3>
      <h5>${ticker.current_price}</h5>
      <h5>{ticker.percent_change}%</h5>
      <h5>{ticker.points_change}</h5>
    </div>
  );
}