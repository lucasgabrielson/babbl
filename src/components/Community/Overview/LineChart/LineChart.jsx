import React from 'react'
import Chart from "react-google-charts";
import TickerCard from '../TickerCard/TickerCard';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  
});

const BubbleChart = () => {

  const classes = useStyles();
  const populated_tickers = useSelector((store) => store.populated_tickers);

  let one_x = Number(populated_tickers.data[0].x_graph.toFixed(2));
  let one_y = Number(populated_tickers.data[0].y_graph.toFixed(2));
  let one_tick = populated_tickers.data[0].ticker;
  let one_sediment = one_x + one_y;
  let one_mentions = Number(populated_tickers.data[0].mentions.toFixed(2) / 100);

  let two_x = Number(populated_tickers.data[1].x_graph.toFixed(2));
  let two_y = Number(populated_tickers.data[1].y_graph.toFixed(2));
  let two_tick = populated_tickers.data[1].ticker;
  let two_sediment = two_x + two_y;
  let two_mentions = Number(populated_tickers.data[1].mentions.toFixed(2));

  let three_x = Number(populated_tickers.data[2].x_graph.toFixed(2));
  let three_y = Number(populated_tickers.data[2].y_graph.toFixed(2));
  let three_tick = populated_tickers.data[2].ticker;
  let three_sediment = three_x + three_y;
  let three_mentions = Number(populated_tickers.data[2].mentions.toFixed(2));

  let four_x = Number(populated_tickers.data[3].x_graph.toFixed(2));
  let four_y = Number(populated_tickers.data[3].y_graph.toFixed(2));
  let four_tick = populated_tickers.data[3].ticker;
  let four_sediment = four_x + four_y;
  let four_mentions = Number(populated_tickers.data[3].mentions.toFixed(2));
 

  // console.log(AAPLx);
  return (
    <div>
      <div className={classes.root}>
        <TickerCard/>
      </div>
      
      <Chart
  width={'50vw'}
  height={'500px'}
  chartType="BubbleChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['ID', 'X', 'Y', 'Bullish Sediment'],
  
    [one_tick, one_x, one_y, one_sediment],
    [two_tick, two_x, two_y, two_sediment],
    [three_tick, three_x, three_y, three_sediment],
    [four_tick, four_x, four_y, four_sediment],
    ['', 81, 200, 210],
    ['', 72, 170, 100],
    ['', 68, 477, 80],
  ]}
  options={{

    sizeAxis: {minValue: 0,  maxSize: 20},
    colorAxis: {minValue: -10, maxValue: 80,  colors: ['white', 'green']},
    hAxis: { title: 'Life Expectancy', viewWindow: {min: -100, max: 100 },
             
  },
    vAxis: { title: 'Fertility Rate', viewWindow: {min: -50, max: 50 } },
    bubble: {
      textStyle: {
        fontSize: 9,
        color: 'black',
        bold: true,
        italic: true,
        auraColor: 'none',
      },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    </div>
  )
}

export default BubbleChart;
