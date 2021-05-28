import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Chart from "react-google-charts";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  lineChartContainer: {
    width: '50vw',
    minWidth: '250px',
    maxWidth: '900px',
  }
  
});


function LineChart ({selectedTicker}){

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch({ type: 'FETCH_TIMESERIES_SENTIMENTS', payload: {tickers: selectedTicker, days: 7} })
    dispatch({ type: 'FETCH_TIMESERIES_PRICES', payload: {ticker: selectedTicker, days: '7d'} })
  }, []);

  const times = useSelector((store)=> {return store.timeseries_sentiments});
  const prices = useSelector((store) => {return store.timeseries_prices});

  let array = [];

  if( Array.isArray(times[0][selectedTicker]) && Array.isArray(prices[0]["close"]) ) {
    for( let i = 0; i < times[0][selectedTicker].length; i++ ) {
      array.push(
        [
          new Date(
            times[0][selectedTicker][i].date.slice(0,4), 
            times[0][selectedTicker][i].date.slice(5,7) - 1, 
            times[0][selectedTicker][i].date.slice(8,10)
          ),
          times[0][selectedTicker][i].value,
          prices[i]["close"]
        ]
      )
    }
  }

    return(
        <div className={classes.lineChartContainer}>
        {JSON.stringify(times)}
        {JSON.stringify(prices)}
          <Chart
            width={'100%'}
            height={'500'}
            chartType="Line"
            loader={<div>Loading Chart . . .</div>}
            data={[
              [
                { type: 'date', label: 'Day'},
                'Babbl Score',
                'Closing Price',
              ],
              ...array
            ]}
            options={{
              chart: {
                title:
                  'Daily Closing Price and Babbl Score',
              },
              width: 1000,
              height: 500,
              series: {
                // Gives each series an axis name that matches the Y-axis below.
                0: { axis: 'Babbl Score' },
                1: { axis: 'Price (USD)' },
              },
              axes: {
                // Adds labels to each axis; they don't have to match the axis names.
                y: {
                  Temps: { label: 'Dunno' },
                  Daylight: { label: 'Price (USD)' },
                },
              },
            }}
            rootProps={{ 'data-testid': '4' }}
          />
        </div>
    )
}

export default LineChart;