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
  let two_mentions = Number(populated_tickers.data[1].mentions.toFixed(2) / 100);

  let three_x = Number(populated_tickers.data[2].x_graph.toFixed(2));
  let three_y = Number(populated_tickers.data[2].y_graph.toFixed(2));
  let three_tick = populated_tickers.data[2].ticker;
  let three_sediment = three_x + three_y;
  let three_mentions = Number(populated_tickers.data[2].mentions.toFixed(2) / 100);

  let four_x = Number(populated_tickers.data[3].x_graph.toFixed(2));
  let four_y = Number(populated_tickers.data[3].y_graph.toFixed(2));
  let four_tick = populated_tickers.data[3].ticker;
  let four_sediment = four_x + four_y;
  let four_mentions = Number(populated_tickers.data[3].mentions.toFixed(2) / 100);

  let five_x = Number(populated_tickers.data[4].x_graph.toFixed(2));
  let five_y = Number(populated_tickers.data[4].y_graph.toFixed(2));
  let five_tick = populated_tickers.data[4].ticker;
  let five_sediment = five_x + five_y;
  let five_mentions = Number(populated_tickers.data[4].mentions.toFixed(2) / 100);

  let six_x = Number(populated_tickers.data[5].x_graph.toFixed(2));
  let six_y = Number(populated_tickers.data[5].y_graph.toFixed(2));
  let six_tick = populated_tickers.data[5].ticker;
  let six_sediment = six_x + six_y;
  let six_mentions = Number(populated_tickers.data[5].mentions.toFixed(2) / 100);

  let seven_x = Number(populated_tickers.data[6].x_graph.toFixed(2));
  let seven_y = Number(populated_tickers.data[6].y_graph.toFixed(2));
  let seven_tick = populated_tickers.data[6].ticker;
  let seven_sediment = seven_x + seven_y;
  let seven_mentions = Number(populated_tickers.data[6].mentions.toFixed(2) / 100);

  let eight_x = Number(populated_tickers.data[7].x_graph.toFixed(2));
  let eight_y = Number(populated_tickers.data[7].y_graph.toFixed(2));
  let eight_tick = populated_tickers.data[7].ticker;
  let eight_sediment = eight_x + eight_y;
  let eight_mentions = Number(populated_tickers.data[7].mentions.toFixed(2) / 100);

  let nine_x = Number(populated_tickers.data[8].x_graph.toFixed(2));
  let nine_y = Number(populated_tickers.data[8].y_graph.toFixed(2));
  let nine_tick = populated_tickers.data[8].ticker;
  let nine_sediment = nine_x + nine_y;
  let nine_mentions = Number(populated_tickers.data[8].mentions.toFixed(2) / 100);

  let ten_x = Number(populated_tickers.data[9].x_graph.toFixed(2));
  let ten_y = Number(populated_tickers.data[9].y_graph.toFixed(2));
  let ten_tick = populated_tickers.data[9].ticker;
  let ten_sediment = ten_x + ten_y;
  let ten_mentions = Number(populated_tickers.data[9].mentions.toFixed(2) / 100);
 
 

  
  return (
    <div>
      <h3 className={classes.root}>Article Sentiments</h3>
      <Chart
  width={'60vw'}
  height={'500px'}
  chartType="BubbleChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['ID', 'Outlook', 'Sentiment', 'Bullish Sentiment', 'Size'],
  
    [one_tick, one_x, one_y, one_sediment, one_mentions],
    [two_tick, two_x, two_y, two_sediment, two_mentions],
    [three_tick, three_x, three_y, three_sediment, three_mentions],
    [four_tick, four_x, four_y, four_sediment, four_mentions],
    [five_tick, five_x, five_y, five_sediment, five_mentions],
    [six_tick, six_x, six_y, six_sediment, six_mentions],
    [seven_tick, seven_x, seven_y, seven_sediment, seven_mentions],
    [eight_tick, eight_x, eight_y, eight_sediment, eight_mentions],
    [nine_tick, nine_x, nine_y, nine_sediment, nine_mentions],
    [ten_tick, ten_x, ten_y, ten_sediment, ten_mentions],
    
  ]}
  options={{
    theme: {chartArea: {width: '80%', height: '80%'}},
    explorer: {},
    sizeAxis: {minSize: 15, maxSize: 50},
    titlePosition: 'right',
    colorAxis: {  minValue: -10, maxValue: 80,  colors: ['white', '#4334eb']},
    hAxis: { title: 'Past -------- Future', viewWindow: {min: -100, max: 100 }},
    vAxis: { title: 'Negative -------- Positive', viewWindow: {min: -100, max: 100 }, },
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
