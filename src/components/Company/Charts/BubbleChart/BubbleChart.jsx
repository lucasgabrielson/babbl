import React, {useState, useEffect} from 'react'
import Chart from "react-google-charts";
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
  
});

const BubbleChart = ({selectedTicker}, {setSelectedTicker}) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const ticker = useSelector((store)=> {return store.tickers})
  
  useEffect (() => {
    dispatch({type: 'FETCH_TICKERS', payload: {ticker: params.id}});
  }, []); 
  
  const populated_tickers = useSelector((store) => store.populated_tickers);
  const babbl_api_articles = useSelector((store) => store.babbl_api_articles);

  
 

  let one_x = Number(babbl_api_articles[params.id][0].x_graph.toFixed(2));
  let one_y = Number(babbl_api_articles[params.id][0].y_graph.toFixed(2));
  let one_tick = params.id;
  let one_sediment = one_x ;
  // let  = Number(populated_tickers.data[0].mentions.toFixed(2) / 100);

  let two_x = Number(babbl_api_articles[params.id][1].x_graph.toFixed(2));
  let two_y = Number(babbl_api_articles[params.id][1].y_graph.toFixed(2));
  let two_tick = params.id;
  let two_sediment = two_x ;
  // let two_mentions = Number(populated_tickers.data[1].mentions.toFixed(2) / 100);

  let three_x = Number(babbl_api_articles[params.id][2].x_graph.toFixed(2));
  let three_y = Number(babbl_api_articles[params.id][2].y_graph.toFixed(2));
  let three_tick = params.id;
  let three_sediment = three_x ;
  // let three_mentions = Number(populated_tickers.data[2].mentions.toFixed(2) / 100);

  let four_x = Number(babbl_api_articles[params.id][3].x_graph.toFixed(2));
  let four_y = Number(babbl_api_articles[params.id][3].y_graph.toFixed(2));
  let four_tick = params.id;
  let four_sediment = four_x 
  // let four_mentions = Number(populated_tickers.data[3].mentions.toFixed(2) / 100);

  // let five_x = Number(babbl_api_articles[params.id][4].x_graph.toFixed(2));
  // let five_y = Number(babbl_api_articles[params.id][4].y_graph.toFixed(2));
  // let five_tick = params.id;
  // let five_sediment = five_x + five_y;
  // // let five_mentions = Number(populated_tickers.data[4].mentions.toFixed(2) / 100);

  // let six_x = Number(babbl_api_articles[params.id][5].x_graph.toFixed(2));
  // let six_y = Number(babbl_api_articles[params.id][5].y_graph.toFixed(2));
  // let six_tick = params.id;
  // let six_sediment = six_x + six_y;
  // let six_mentions = Number(populated_tickers.data[5].mentions.toFixed(2) / 100);

  // let seven_x = Number(babbl_api_articles.AAPL[6].x_graph.toFixed(2));
  // let seven_y = Number(babbl_api_articles.AAPL[6].y_graph.toFixed(2));
  // let seven_tick = 'AAPL';
  // let seven_sediment = seven_x + seven_y;
  // let seven_mentions = Number(populated_tickers.data[6].mentions.toFixed(2) / 100);

  // let eight_x = Number(populated_tickers.data[7].x_graph.toFixed(2));
  // let eight_y = Number(populated_tickers.data[7].y_graph.toFixed(2));
  // let eight_tick = populated_tickers.data[7].ticker;
  // let eight_sediment = eight_x + eight_y;
  // let eight_mentions = Number(populated_tickers.data[7].mentions.toFixed(2) / 100);

  // let nine_x = Number(populated_tickers.data[8].x_graph.toFixed(2));
  // let nine_y = Number(populated_tickers.data[8].y_graph.toFixed(2));
  // let nine_tick = populated_tickers.data[8].ticker;
  // let nine_sediment = nine_x + nine_y;
  // let nine_mentions = Number(populated_tickers.data[8].mentions.toFixed(2) / 100);

  // let ten_x = Number(populated_tickers.data[9].x_graph.toFixed(2));
  // let ten_y = Number(populated_tickers.data[9].y_graph.toFixed(2));
  // let ten_tick = populated_tickers.data[9].ticker;
  // let ten_sediment = ten_x + ten_y;
  // let ten_mentions = Number(populated_tickers.data[9].mentions.toFixed(2) / 100);
 
 

  
  return (
    <div>
      
      <Chart
  width={'95vw'}
  height={'500px'}
  chartType="BubbleChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['ID', 'Future-Past', 'Positive Sentiment', 'Color', ],
  
    [one_tick, one_x, one_y, one_sediment, ],
    [two_tick, two_x, two_y, two_sediment, ],
    [three_tick, three_x, three_y, three_sediment, ],
    [four_tick, four_x, four_y, four_sediment, ],
    // [five_tick, five_x, five_y, five_sediment, ],
    // [six_tick, six_x, six_y, six_sediment, ],
    
    
  ]}
  options={{
    animation: {duration: 600, easing: 'in', startup: true},
    theme: {chartArea: {width: '85%', height: '80%'}},
    explorer: {},
    sizeAxis: {minSize: 10, maxSize: 25},
    colorAxis: {minValue: -10, maxValue: 80,  colors: ['white', '#4334eb']},
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
