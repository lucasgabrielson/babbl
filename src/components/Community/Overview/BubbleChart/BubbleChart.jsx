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

  let AAPLx = Number(populated_tickers.data[0].x_graph.toFixed(2));
  let AAPLy = Number(populated_tickers.data[0].y_graph.toFixed(2));
  let AAPL_mentions = Number(populated_tickers.data[0].mentions.toFixed(2) * 10000);

  console.log(AAPLx);
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
    ['ID', 'Future-Past', 'Fertility Rate', 'Region'],
    [`${populated_tickers.data[0].ticker}`, AAPLx, AAPLy, 'North America', AAPL_mentions],
    ['DEU', 79.84, 1.36, 'Europe', 81902307],
    ['DNK', 78.6, 1.84, 'Europe', 5523095],
    ['EGY', 72.73, 2.78, 'Middle East', 79716203],
    ['GBR', 80.05, 2, 'Europe', 61801570],
    ['IRN', 72.49, 1.7, 'Middle East', 73137148],
    ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
    ['ISR', 81.55, 2.96, 'Middle East', 7485600],
    ['RUS', 68.6, 1.54, 'Europe', 141850000],
    ['USA', 78.09, 2.05, 'North America', 307007000]
  ]}

  options={{
    // title:
    //   'Correlation between life expectancy, fertility rate ' +
    //   'and population of some world countries (2010)',
    hAxis: { title: 'Life Expectancy', viewWindow: {min: -100, max: 100 }},
    vAxis: { title: 'Fertility Rate', viewWindow: {min: -100, max: 100 } },
    
    bubble: {
      textStyle: {
        fontSize: 9,
        fontName: 'Times-Roman',
        color: 'green',
        bold: true,
        italic: true,
        auraColor: 'none',
      },
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
    </div>
  )
}

export default BubbleChart;
