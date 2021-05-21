import React, {useEffect, useState} from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import { useDispatch } from 'react-redux';

function LineChart (){
  const dispatch = useDispatch();

  axios.get('/', (req, res) => {

    console.log( 'in GET /api/timeseries_sentiments', req.query);
        axios.get(`https://api.babbl.dev/v1/timeseries_sentiment?key=${process.env.BABBL_TOKEN}&tickers=${req.query.tickers}&days=${req.query.days}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'error connecting with babbl api /timeseries_sentiments GET');
                res.sendStatus(500);
            })
});

  useEffect(()=> {
    dispatch({ type: 'FETCH_TIMESERIES_SENTIMENTS'})
  }, {});

    return(
        <>
        <Chart
  width={'1200px'}
  height={'600px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs', 'cats'],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
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