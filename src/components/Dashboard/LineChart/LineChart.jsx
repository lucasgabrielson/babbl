import React from 'react'
import Chart from "react-google-charts";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  lineChartContainer: {
    width: '50vw',
    minWidth: '250px',
    maxWidth: '900px',
  }
  
});


function LineChart (){

  const classes = useStyles();

    return(
        <div className={classes.lineChartContainer}>
        <Chart
  
  height={'500px'}
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
      title: 'Time',
    },
    vAxis: {
      title: 'Popularity',
    },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
    )
}

export default LineChart;