import React, {useEffect, useState} from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';


function LineChart (){
  const dispatch = useDispatch();
  const params = useParams();
  const times = useSelector((store)=> {return store.timeseries_sentiments})
  const prices = useSelector((store) => {return store.timeseries_prices})


  useEffect(()=> {
    dispatch({ type: 'FETCH_TIMESERIES_SENTIMENTS', payload: {tickers: params.id, days: 7} })
    dispatch({ type: 'FETCH_TIMESERIES_PRICES'})
  }, []);
  console.log('params:', params);

    return(
        <>
        {JSON.stringify(times)}

        {times.map(time => {
          return (
            <div key={time.id}>
              <p>{time.id}</p>

            </div>
          )
        })}

        <Chart
  width={'1200px'}
  height={'600px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'Sentiments', 'Prices'],
    [0, 0, 0],
    [1, 10, 30],
    [2, 23, 45],
    [3, 17, 50],
    [4, 18, 2],
    [5, 9, 24],
    [6, 11, 34],
    [7, 27, 77],
  ]}
  options={{
    hAxis: {
      title: 'Days',
    },
    vAxis: {
      title: 'Change',
    },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        </>
    )
}

export default LineChart;