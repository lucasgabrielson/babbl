import React, {useEffect, useState} from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';


function LineChart (){
  const dispatch = useDispatch();
  const params = useParams();
  const times = useSelector((store)=> {return store.timeseries_sentiments})
  const prices = useSelector((store) => {return store.timeseries_prices});
  const ticker = params.id

  useEffect(()=> {
    dispatch({ type: 'FETCH_TIMESERIES_SENTIMENTS', payload: {tickers: params.id, days: 7} })
    dispatch({ type: 'FETCH_TIMESERIES_PRICES', payload: {ticker: params.id, days: '7d'} })
  }, []);
  console.log('params:', params);


  let array = [];

  if( times[0] !== undefined && prices[0] !== undefined ) {
    for( let i = 0; i < times[0][ticker].length; i++ ) {
      console.log(times[0][ticker][i].date.slice(0,4), 
        times[0][ticker][i].date.slice(5,7), 
        times[0][ticker][i].date.slice(8,10));
      array.push(
        [
          new Date(
            times[0][ticker][i].date.slice(0,4), 
            times[0][ticker][i].date.slice(5,7) - 1, 
            times[0][ticker][i].date.slice(8,10)
          ),
          times[0][ticker][i].value,
          prices[i]["close"]
        ]
      )
    }
  }

  
    return(
        <>
        {/* {JSON.stringify(params.id)}
        {JSON.stringify(times)} */}
        {/* {JSON.stringify(prices)} */}
        {JSON.stringify(array)}
        {/* { array.length &&  */}
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
        {/* } */}
        </>
    )
}

export default LineChart;


/**
  const [sentiments, setSentiments] = React.useState(
    [
      {
      date: '2021-05-19',
      value: 5.8,
      },
      {
      date: '2021-05-19',
      value: 5.8,
      },
      {
      date: '2021-05-19',
      value: 5.8,
      },
    ]
  );

  const [stockPrices, setStockPrices] = React.useState(
    [
      {
        "date" : '2021-05-19',
        "close": 124.69
      },
      {
        "date" : '2021-05-19',
        "close": 124.69
      },
      {
        "date" : '2021-05-19',
        "close": 124.69
      },
    ]
  )

  React.useEffect(() => {
    const data = localStorage.getItem("sentiments");
    if (data) {
      setSentiments(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    const data = localStorage.getItem("stockPrices");
    if (data) {
      setStockPrices(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("sentiments", JSON.stringify(times));
  });

  React.useEffect(() => {
    localStorage.setItem("stockPrices", JSON.stringify(prices));
  }); */