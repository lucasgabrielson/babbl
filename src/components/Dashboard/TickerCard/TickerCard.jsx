import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    
    width: '600px',
    height: '150px',
    border: '2px solid rgb(67, 52, 235, .8)',
    borderRadius: '5px',
    // padding: '20px',
  },
  row: {
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-around',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    // color: 'gray',
    // padding: 0,
    // margin: 0,
  },
  
  title: {
    fontSize: 15,
    color: 'gray',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TickerCard({selectedTicker}, {setSelectedTicker}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const ticker = useSelector((store)=> {return store.tickers})
  
  useEffect (() => {

    dispatch({type: 'FETCH_TICKERS', payload: {ticker: selectedTicker}});
  }, [ticker]); 
console.log('This should be ticker', selectedTicker);

  return (
    <div className={classes.root}>
      
      <div className={classes.row}>
        <div className={classes.column}>
          <h4 className={classes.title}>Ticker</h4>
          <h1>{selectedTicker}</h1>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Price</h4>
          <h3>${ticker.current_price}</h3>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Change</h4>
          <h3>{ticker.percent_change}%</h3>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Points</h4>
          <h3>{ticker.points_change}</h3>
        </div>
      </div>
    </div>
  );
}