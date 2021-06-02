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


  let array = 
      [
        [new Date(2021,6,26), 0.5833333333333333, 125.43],
        [new Date(2021,6,27), 0.22354295681158198, 127.10],
        [new Date(2021,6,28), 0.02459921156932781, 126.90],
        [new Date(2021,6,29), 0.4375, 126.85],
        [new Date(2021,6,30), 0.40021740871927014, 125.28],
        [new Date(2021,6,31), 0.70021740871927014, 124.61],
        [new Date(2021,7,1), 0.20021740871927014, 124.66],
      ];

  if( ticker === 'AAPL' ) {
    array = 
      [
        [new Date(2021,6,26), 0.0, 245.17],
        [new Date(2021,6,27), -0.002262858167222158, 250.78],
        [new Date(2021,6,28), 0.011258529722700016, 251.72],
        [new Date(2021,6,29), 0.007813171985047962, 251.49],
        [new Date(2021,6,30), 0.004325122982285683, 249.31],
        [new Date(2021,6,31), 0.104325122982285683, 249.68],
        [new Date(2021,7,1), 0.204325122982285683, 248.86],
      ]
  } else if( ticker === 'TSLA') {
    array =
    [
        [new Date(2021,6,26), 0.08736626839969052, 573.65],
        [new Date(2021,6,27), 0.03736626839969052, 595.71],
        [new Date(2021,6,28), -0.9729939477281795, 601.50],
        [new Date(2021,6,29), 0.0997398344508387, 619.13],
        [new Date(2021,6,30), 0.0, 630.85],
        [new Date(2021,6,31), 0.07736626839969052, 625.22],
        [new Date(2021,7,1), 0.01736626839969052, 626.07],
      ]
  }

  // if( times[0] !== undefined && prices[0] !== undefined ) {
  //   for( let i = 0; i < times[0][ticker].length; i++ ) {
  //     console.log(times[0][ticker][i].date.slice(0,4), 
  //       times[0][ticker][i].date.slice(5,7), 
  //       times[0][ticker][i].date.slice(8,10));
  //     array.push(
  //       [
  //         new Date(
  //           times[0][ticker][i].date.slice(0,4), 
  //           times[0][ticker][i].date.slice(5,7) - 1, 
  //           times[0][ticker][i].date.slice(8,10)
  //         ),
  //         times[0][ticker][i].value,
  //         prices[i]["close"]
  //       ]
  //     )
  //   }
  // }

  
    return(
        <>
        {/* {JSON.stringify(params.id)}
        {JSON.stringify(times)} */}
        {/* {JSON.stringify(prices)} */}
        {/* {JSON.stringify(array)} */}
        {/* { array.length &&  */}
        <Chart
          width={'100%'}
          height={'500'}
          chartType="Line"
          loader={<div>Loading Chart . . .</div>}
          data={[
            [
              { type: 'date', label: 'Day'},
              'Sentiment',
              'Closing Price',
            ],
            ...array
          ]}
          options={{
            chart: {
              title:
                'Daily Closing Price and Sentiment',
            },
            width: 1000,
            height: 500,
            series: {
              // Gives each series an axis name that matches the Y-axis below.
              0: { axis: 'Sentiment' },
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