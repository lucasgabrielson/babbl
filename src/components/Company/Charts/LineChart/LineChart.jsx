import React, {useEffect, useState} from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';


function LineChart (){
  const dispatch = useDispatch();
  const params = useParams();
  const time = useSelector((store)=> {return store.timeseries_sentiments})


  useEffect(()=> {
    dispatch({ type: 'FETCH_TIMESERIES_SENTIMENTS', payload: {tickers: params.id, days: 7} })
  }, []);
  console.log('params:', params);

    return(
        <>
        {JSON.stringify(time)}
        <Chart
  width={'1200px'}
  height={'600px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'Change'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
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