import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

const columns = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'ticker', headerName: 'Ticker', width: 150 },
  { field: 'title', headerName: 'Title',  width: 300},
  { field: 'mentions', headerName: 'Mentions', width: 300 },
  { field: 'score', headerName: 'Babbl Score', width: 150 },
  {
    field: "url",
    headerName: "View",
    disableClickEventBubbling: true,
    renderCell: (params) => {
    const onClick = () => {
        console.log('url', params.row);
    };
    return <IconButton variant="contained" size="small" onClick={onClick}>
              <ChromeReaderModeIcon />
            </IconButton>
    },
    width: 100
},
    {
      field: "bookmark",
      headerName: "Bookmark",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const dispatch = useDispatch();
        const userID = useSelector((store) => {return store.user});

      const bookmark = (row) => {
          console.log('bookmark', params.row);
          row = {
            userID: userID.id,
            date: params.row.date,
            title: params.row.title,
            ticker: params.row.ticker,
            mentions: params.row.mentions,
            link: params.row.link
          }
          dispatch({type: 'ADD_USER_ARTICLES', payload: row});
      };
      return  <IconButton variant="contained" size="small" onClick={()=>bookmark(params.row)}>
                <BookmarkBorderIcon />
              </IconButton>
      },
      width: 100
  },
 
  ];

function CommunityNews(){


  const dispatch = useDispatch();
  
  const babbl_api_articles = useSelector( store => store.babbl_api_articles);

  const AAPL_articles = babbl_api_articles.AAPL;
  const AMC_articles = babbl_api_articles.AMC;
  const AMD_articles = babbl_api_articles.AMD;
  const ARKK_articles = babbl_api_articles.ARKK;
  const EV_articles = babbl_api_articles.EV;
  const MSFT_articles = babbl_api_articles.MSFT;
  const NVDA_articles = babbl_api_articles.NVDA;
  const OS_articles = babbl_api_articles.OS;
  const PLTR_articles = babbl_api_articles.PLTR;
  const TSLA_articles = babbl_api_articles.TSLA;

  const rows = [
    //3 most recent articles from AAPL
    { id: 1, date: `${AAPL_articles[0].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[0].url}`, title: `"${AAPL_articles[0].title}"`, mentions: `${AAPL_articles[0].entities}`, score: `${Number(AAPL_articles[0].optimism - AAPL_articles[0].pessimism).toFixed(2)}` },
    { id: 2, date: `${AAPL_articles[1].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[1].url}`, title: `"${AAPL_articles[1].title}"`, mentions: `${AAPL_articles[1].entities}`, score: `${Number(AAPL_articles[1].optimism - AAPL_articles[1].pessimism).toFixed(2)}` },
    { id: 3, date: `${AAPL_articles[2].timestamp}`, ticker: `APPL`, url: `${AAPL_articles[2].url}`, title: `"${AAPL_articles[2].title}"`, mentions: `${AAPL_articles[2].entities}`, score: `${Number(AAPL_articles[2].optimism - AAPL_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from AMC
    { id: 4, date: `${AMC_articles[0].timestamp}`, ticker: `AMC`, url: `${AMC_articles[0].url}`, title: `"${AMC_articles[0].title}"`, mentions: `${AMC_articles[0].entities}`, score: `${Number(AMC_articles[0].optimism - AMC_articles[0].pessimism).toFixed(2)}` },
    { id: 5, date: `${AMC_articles[1].timestamp}`, ticker: `AMC`, url: `${AMC_articles[1].url}`, title: `"${AMC_articles[1].title}"`, mentions: `${AMC_articles[1].entities}`, score: `${Number(AMC_articles[1].optimism - AMC_articles[1].pessimism).toFixed(2)}` },
    { id: 6, date: `${AMC_articles[2].timestamp}`, ticker: `AMC`, url: `${AMC_articles[2].url}`, title: `"${AMC_articles[2].title}"`, mentions: `${AMC_articles[2].entities}`, score: `${Number(AMC_articles[2].optimism - AMC_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from AMD
    { id: 7, date: `${AMD_articles[0].timestamp}`, ticker: `AMD`, url: `${AMD_articles[0].url}`, title: `"${AMD_articles[0].title}"`, mentions: `${AMD_articles[0].entities}`, score: `${Number(AMD_articles[0].optimism - AMD_articles[0].pessimism).toFixed(2)}` },
    { id: 8, date: `${AMD_articles[1].timestamp}`, ticker: `AMD`, url: `${AMD_articles[1].url}`, title: `"${AMD_articles[1].title}"`, mentions: `${AMD_articles[1].entities}`, score: `${Number(AMD_articles[1].optimism - AMD_articles[1].pessimism).toFixed(2)}` },
    { id: 9, date: `${AMD_articles[2].timestamp}`, ticker: `AMD`, url: `${AMD_articles[2].url}`, title: `"${AMD_articles[2].title}"`, mentions: `${AMD_articles[2].entities}`, score: `${Number(AMD_articles[2].optimism - AMD_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from ARKK
    // { id: 10, date: `${ARKK_articles[0].timestamp}`, ticker: `ARKK`, url: `${ARKK_articles[0].url}`, title: `"${ARKK_articles[0].title}"`, mentions: `${ARKK_articles[0].entities}`, score: `${Number(ARKK_articles[0].optimism - ARKK_articles[0].pessimism).toFixed(2)}` },
    // { id: 11, date: `${ARKK_articles[1].timestamp}`, ticker: `ARKK`, url: `${ARKK_articles[1].url}`, title: `"${ARKK_articles[1].title}"`, mentions: `${ARKK_articles[1].entities}`, score: `${Number(ARKK_articles[1].optimism - ARKK_articles[1].pessimism).toFixed(2)}` },
    // { id: 12, date: `${ARKK_articles[2].timestamp}`, ticker: `ARKK`, url: `${ARKK_articles[2].url}`, title: `"${ARKK_articles[2].title}"`, mentions: `${ARKK_articles[2].entities}`, score: `${Number(ARKK_articles[2].optimism - ARKK_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from EV
    { id: 13, date: `${EV_articles[0].timestamp}`, ticker: `EV`, url: `${EV_articles[0].url}`, title: `"${EV_articles[0].title}"`, mentions: `${EV_articles[0].entities}`, score: `${Number(EV_articles[0].optimism - EV_articles[0].pessimism).toFixed(2)}` },
    { id: 14, date: `${EV_articles[1].timestamp}`, ticker: `EV`, url: `${EV_articles[1].url}`, title: `"${EV_articles[1].title}"`, mentions: `${EV_articles[1].entities}`, score: `${Number(EV_articles[1].optimism - EV_articles[1].pessimism).toFixed(2)}` },
    { id: 15, date: `${EV_articles[2].timestamp}`, ticker: `EV`, url: `${EV_articles[2].url}`, title: `"${EV_articles[2].title}"`, mentions: `${EV_articles[2].entities}`, score: `${Number(EV_articles[2].optimism - EV_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from MSFT
    { id: 16, date: `${MSFT_articles[0].timestamp}`, ticker: `MSFT`, url: `${MSFT_articles[0].url}`, title: `"${MSFT_articles[0].title}"`, mentions: `${MSFT_articles[0].entities}`, score: `${Number(MSFT_articles[0].optimism - MSFT_articles[0].pessimism).toFixed(2)}` },
    { id: 17, date: `${MSFT_articles[1].timestamp}`, ticker: `MSFT`, url: `${MSFT_articles[1].url}`, title: `"${MSFT_articles[1].title}"`, mentions: `${MSFT_articles[1].entities}`, score: `${Number(MSFT_articles[1].optimism - MSFT_articles[1].pessimism).toFixed(2)}` },
    { id: 18, date: `${MSFT_articles[2].timestamp}`, ticker: `MSFT`, url: `${MSFT_articles[2].url}`, title: `"${MSFT_articles[2].title}"`, mentions: `${MSFT_articles[2].entities}`, score: `${Number(MSFT_articles[2].optimism - MSFT_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from NVDA
    { id: 19, date: `${NVDA_articles[0].timestamp}`, ticker: `NVDA`, url: `${NVDA_articles[0].url}`, title: `"${NVDA_articles[0].title}"`, mentions: `${NVDA_articles[0].entities}`, score: `${Number(NVDA_articles[0].optimism - NVDA_articles[0].pessimism).toFixed(2)}` },
    { id: 20, date: `${NVDA_articles[1].timestamp}`, ticker: `NVDA`, url: `${NVDA_articles[1].url}`, title: `"${NVDA_articles[1].title}"`, mentions: `${NVDA_articles[1].entities}`, score: `${Number(NVDA_articles[1].optimism - NVDA_articles[1].pessimism).toFixed(2)}` },
    { id: 21, date: `${NVDA_articles[2].timestamp}`, ticker: `NVDA`, url: `${NVDA_articles[2].url}`, title: `"${NVDA_articles[2].title}"`, mentions: `${NVDA_articles[2].entities}`, score: `${Number(NVDA_articles[2].optimism - NVDA_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from OS
    { id: 22, date: `${OS_articles[0].timestamp}`, ticker: `OS`, url: `${OS_articles[0].url}`, title: `"${OS_articles[0].title}"`, mentions: `${OS_articles[0].entities}`, score: `${Number(OS_articles[0].optimism - OS_articles[0].pessimism).toFixed(2)}` },
    { id: 23, date: `${OS_articles[1].timestamp}`, ticker: `OS`, url: `${OS_articles[1].url}`, title: `"${OS_articles[1].title}"`, mentions: `${OS_articles[1].entities}`, score: `${Number(OS_articles[1].optimism - OS_articles[1].pessimism).toFixed(2)}` },
    { id: 24, date: `${OS_articles[2].timestamp}`, ticker: `OS`, url: `${OS_articles[2].url}`, title: `"${OS_articles[2].title}"`, mentions: `${OS_articles[2].entities}`, score: `${Number(OS_articles[2].optimism - OS_articles[2].pessimism).toFixed(2)}` },

     //3 most recent articles from PLTR
     { id: 25, date: `${PLTR_articles[0].timestamp}`, ticker: `PLTR`, url: `${PLTR_articles[0].url}`, title: `"${PLTR_articles[0].title}"`, mentions: `${PLTR_articles[0].entities}`, score: `${Number(PLTR_articles[0].optimism - PLTR_articles[0].pessimism).toFixed(2)}` },
     { id: 26, date: `${PLTR_articles[1].timestamp}`, ticker: `PLTR`, url: `${PLTR_articles[1].url}`, title: `"${PLTR_articles[1].title}"`, mentions: `${PLTR_articles[1].entities}`, score: `${Number(PLTR_articles[1].optimism - PLTR_articles[1].pessimism).toFixed(2)}` },
     { id: 27, date: `${PLTR_articles[2].timestamp}`, ticker: `PLTR`, url: `${PLTR_articles[2].url}`, title: `"${PLTR_articles[2].title}"`, mentions: `${PLTR_articles[2].entities}`, score: `${Number(PLTR_articles[2].optimism - PLTR_articles[2].pessimism).toFixed(2)}` },

       //3 most recent articles from TSLA
       { id: 28, date: `${TSLA_articles[0].timestamp}`, ticker: `TSLA`, url: `${TSLA_articles[0].url}`, title: `"${TSLA_articles[0].title}"`, mentions: `${TSLA_articles[0].entities}`, score: `${Number(TSLA_articles[0].optimism - TSLA_articles[0].pessimism).toFixed(2)}` },
       { id: 29, date: `${TSLA_articles[1].timestamp}`, ticker: `TSLA`, url: `${TSLA_articles[1].url}`, title: `"${TSLA_articles[1].title}"`, mentions: `${TSLA_articles[1].entities}`, score: `${Number(TSLA_articles[1].optimism - TSLA_articles[1].pessimism).toFixed(2)}` },
       { id: 30, date: `${TSLA_articles[2].timestamp}`, ticker: `TSLA`, url: `${TSLA_articles[2].url}`, title: `"${TSLA_articles[2].title}"`, mentions: `${TSLA_articles[2].entities}`, score: `${Number(TSLA_articles[2].optimism - TSLA_articles[2].pessimism).toFixed(2)}` },
   
  ];

    return(
        <>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        </>
    )
}

export default CommunityNews;