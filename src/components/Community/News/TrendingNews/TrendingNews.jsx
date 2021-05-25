import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const columns = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'ticker', headerName: 'Ticker', width: 150 },
  { field: 'title', headerName: 'Title',  width: 300},
  { field: 'mentions', headerName: 'Mentions', width: 300 },
  { field: 'score', headerName: 'Babbl Score', width: 150 },
  {
    field: "url",
    headerName: "View Article",
    disableClickEventBubbling: true,
    renderCell: (params) => {
    const onClick = () => {
        console.log('url', params.row);
    };
    return <Button variant="contained" size="small" onClick={onClick}>View</Button>;
    },
    width: 175
},
    {
      field: "bookmark",
      headerName: "Bookmark Article",
      disableClickEventBubbling: true,
      renderCell: (params) => {
      const onClick = () => {
          console.log('bookmark', params.row);
      };
      return <Button variant="contained" size="small" onClick={onClick}>bookmark</Button>;
      },
      width: 175
  },
 
  ];
  
  

function TrendingNews(){

  const dispatch = useDispatch();
  
  const babbl_api_articles = useSelector( store => store.babbl_api_articles);

  const AAPL_articles = babbl_api_articles.AAPL;
  const AMC_articles = babbl_api_articles.AMC;
  const AMD_articles = babbl_api_articles.AMD;

  const rows = [
    //3 most recent articles from AAPL
    { id: 1, date: `${AAPL_articles[0].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[0].url}`, title: `"${AAPL_articles[0].title}"`, mentions: `${AAPL_articles[0].entities}`, score: `${Number(AAPL_articles[0].optimism - AAPL_articles[0].pessimism).toFixed(2)}` },
    { id: 2, date: `${AAPL_articles[1].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[1].url}`, title: `"${AAPL_articles[1].title}"`, mentions: `${AAPL_articles[1].entities}`, score: `${Number(AAPL_articles[1].optimism - AAPL_articles[1].pessimism).toFixed(2)}` },
    { id: 3, date: `${AAPL_articles[2].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[2].url}`, title: `"${AAPL_articles[2].title}"`, mentions: `${AAPL_articles[2].entities}`, score: `${Number(AAPL_articles[2].optimism - AAPL_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from AMC
    { id: 4, date: `${AMC_articles[0].timestamp}`, ticker: `AMC`, url: `${AMC_articles[0].url}`, title: `"${AMC_articles[0].title}"`, mentions: `${AMC_articles[0].entities}`, score: `${Number(AMC_articles[0].optimism - AMC_articles[0].pessimism).toFixed(2)}` },
    { id: 5, date: `${AMC_articles[1].timestamp}`, ticker: `AMC`, url: `${AMC_articles[1].url}`, title: `"${AMC_articles[1].title}"`, mentions: `${AMC_articles[1].entities}`, score: `${Number(AMC_articles[1].optimism - AMC_articles[1].pessimism).toFixed(2)}` },
    { id: 6, date: `${AMC_articles[2].timestamp}`, ticker: `AMC`, url: `${AMC_articles[2].url}`, title: `"${AMC_articles[2].title}"`, mentions: `${AMC_articles[2].entities}`, score: `${Number(AMC_articles[2].optimism - AMC_articles[2].pessimism).toFixed(2)}` },

    { id: 7, date: `${AMD_articles[0].timestamp}`, ticker: `AMD`, url: `${AMD_articles[0].url}`, title: `"${AMD_articles[0].title}"`, mentions: `${AMD_articles[0].entities}`, score: `${Number(AMD_articles[0].optimism - AMD_articles[0].pessimism).toFixed(2)}` },
    { id: 8, date: `${AMD_articles[1].timestamp}`, ticker: `AMD`, url: `${AMD_articles[1].url}`, title: `"${AMD_articles[1].title}"`, mentions: `${AMD_articles[1].entities}`, score: `${Number(AMD_articles[1].optimism - AMD_articles[1].pessimism).toFixed(2)}` },
    { id: 9, date: `${AMD_articles[2].timestamp}`, ticker: `AMD`, url: `${AMD_articles[2].url}`, title: `"${AMD_articles[2].title}"`, mentions: `${AMD_articles[2].entities}`, score: `${Number(AMD_articles[2].optimism - AMD_articles[2].pessimism).toFixed(2)}` },
   
  ];

    return(
        <>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        </>
    )
}

export default TrendingNews;