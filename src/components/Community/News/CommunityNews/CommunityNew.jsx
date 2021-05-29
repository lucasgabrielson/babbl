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
    

  ];

function CommunityNews(){


  const dispatch = useDispatch();
  
  const babbl_api_sorted_articles = useSelector( store => store.babbl_api_sorted_articles);



  const rows = [
    //3 most recent articles from AAPL
    { id: 1, date: `${babbl_api_sorted_articles[0].timestamp}`, ticker: `APPL`, url: `${babbl_api_sorted_articles[0].url}`, title: `"${babbl_api_sorted_articles[0].title}"`, mentions: `${babbl_api_sorted_articles[0].entities}`, score: `${Number(babbl_api_sorted_articles[0].optimism - babbl_api_sorted_articles[0].pessimism).toFixed(2)}` },
    { id: 2, date: `${babbl_api_sorted_articles[1].timestamp}`, ticker: `APPL`, url: `${babbl_api_sorted_articles[1].url}`, title: `"${babbl_api_sorted_articles[1].title}"`, mentions: `${babbl_api_sorted_articles[1].entities}`, score: `${Number(babbl_api_sorted_articles[1].optimism - babbl_api_sorted_articles[1].pessimism).toFixed(2)}` },
    { id: 3, date: `${babbl_api_sorted_articles[2].timestamp}`, ticker: `APPL`, url: `${babbl_api_sorted_articles[2].url}`, title: `"${babbl_api_sorted_articles[2].title}"`, mentions: `${babbl_api_sorted_articles[2].entities}`, score: `${Number(babbl_api_sorted_articles[2].optimism - babbl_api_sorted_articles[2].pessimism).toFixed(2)}` },

    //3 most recent articles from AMC
    { id: 4, date: `${babbl_api_sorted_articles[3].timestamp}`, ticker: `AMC`, url: `${babbl_api_sorted_articles[3].url}`, title: `"${babbl_api_sorted_articles[3].title}"`, mentions: `${babbl_api_sorted_articles[3].entities}`, score: `${Number(babbl_api_sorted_articles[3].optimism - babbl_api_sorted_articles[3].pessimism).toFixed(2)}` },
    { id: 5, date: `${babbl_api_sorted_articles[4].timestamp}`, ticker: `AMC`, url: `${babbl_api_sorted_articles[4].url}`, title: `"${babbl_api_sorted_articles[4].title}"`, mentions: `${babbl_api_sorted_articles[4].entities}`, score: `${Number(babbl_api_sorted_articles[4].optimism - babbl_api_sorted_articles[4].pessimism).toFixed(2)}` },
    { id: 6, date: `${babbl_api_sorted_articles[5].timestamp}`, ticker: `AMC`, url: `${babbl_api_sorted_articles[5].url}`, title: `"${babbl_api_sorted_articles[5].title}"`, mentions: `${babbl_api_sorted_articles[5].entities}`, score: `${Number(babbl_api_sorted_articles[5].optimism - babbl_api_sorted_articles[5].pessimism).toFixed(2)}` },

    //3 most recent articles from AMD
    { id: 7, date: `${babbl_api_sorted_articles[6].timestamp}`, ticker: `AMD`, url: `${babbl_api_sorted_articles[6].url}`, title: `"${babbl_api_sorted_articles[6].title}"`, mentions: `${babbl_api_sorted_articles[6].entities}`, score: `${Number(babbl_api_sorted_articles[6].optimism - babbl_api_sorted_articles[6].pessimism).toFixed(2)}` },
    { id: 8, date: `${babbl_api_sorted_articles[7].timestamp}`, ticker: `AMD`, url: `${babbl_api_sorted_articles[7].url}`, title: `"${babbl_api_sorted_articles[7].title}"`, mentions: `${babbl_api_sorted_articles[7].entities}`, score: `${Number(babbl_api_sorted_articles[7].optimism - babbl_api_sorted_articles[7].pessimism).toFixed(2)}` },
    { id: 9, date: `${babbl_api_sorted_articles[8].timestamp}`, ticker: `AMD`, url: `${babbl_api_sorted_articles[8].url}`, title: `"${babbl_api_sorted_articles[8].title}"`, mentions: `${babbl_api_sorted_articles[8].entities}`, score: `${Number(babbl_api_sorted_articles[8].optimism - babbl_api_sorted_articles[8].pessimism).toFixed(2)}` },

    //3 most recent articles from ARKK
    { id: 10, date: `${babbl_api_sorted_articles[9].timestamp}`, ticker: `ARKK`, url: `${babbl_api_sorted_articles[9].url}`, title: `"${babbl_api_sorted_articles[9].title}"`, mentions: `${babbl_api_sorted_articles[9].entities}`, score: `${Number(babbl_api_sorted_articles[9].optimism - babbl_api_sorted_articles[9].pessimism).toFixed(2)}` },
    { id: 11, date: `${babbl_api_sorted_articles[10].timestamp}`, ticker: `ARKK`, url: `${babbl_api_sorted_articles[10].url}`, title: `"${babbl_api_sorted_articles[10].title}"`, mentions: `${babbl_api_sorted_articles[10].entities}`, score: `${Number(babbl_api_sorted_articles[10].optimism - babbl_api_sorted_articles[10].pessimism).toFixed(2)}` },
    { id: 12, date: `${babbl_api_sorted_articles[11].timestamp}`, ticker: `ARKK`, url: `${babbl_api_sorted_articles[11].url}`, title: `"${babbl_api_sorted_articles[11].title}"`, mentions: `${babbl_api_sorted_articles[11].entities}`, score: `${Number(babbl_api_sorted_articles[11].optimism - babbl_api_sorted_articles[11].pessimism).toFixed(2)}` },

    //3 most recent articles from EV
    { id: 13, date: `${babbl_api_sorted_articles[12].timestamp}`, ticker: `EV`, url: `${babbl_api_sorted_articles[12].url}`, title: `"${babbl_api_sorted_articles[12].title}"`, mentions: `${babbl_api_sorted_articles[12].entities}`, score: `${Number(babbl_api_sorted_articles[12].optimism - babbl_api_sorted_articles[12].pessimism).toFixed(2)}` },
    { id: 14, date: `${babbl_api_sorted_articles[13].timestamp}`, ticker: `EV`, url: `${babbl_api_sorted_articles[13].url}`, title: `"${babbl_api_sorted_articles[13].title}"`, mentions: `${babbl_api_sorted_articles[13].entities}`, score: `${Number(babbl_api_sorted_articles[13].optimism - babbl_api_sorted_articles[13].pessimism).toFixed(2)}` },
    { id: 15, date: `${babbl_api_sorted_articles[14].timestamp}`, ticker: `EV`, url: `${babbl_api_sorted_articles[14].url}`, title: `"${babbl_api_sorted_articles[14].title}"`, mentions: `${babbl_api_sorted_articles[14].entities}`, score: `${Number(babbl_api_sorted_articles[14].optimism - babbl_api_sorted_articles[14].pessimism).toFixed(2)}` },

    //3 most recent articles from MSFT
    { id: 16, date: `${babbl_api_sorted_articles[15].timestamp}`, ticker: `MSFT`, url: `${babbl_api_sorted_articles[15].url}`, title: `"${babbl_api_sorted_articles[15].title}"`, mentions: `${babbl_api_sorted_articles[15].entities}`, score: `${Number(babbl_api_sorted_articles[15].optimism - babbl_api_sorted_articles[15].pessimism).toFixed(2)}` },
    { id: 17, date: `${babbl_api_sorted_articles[16].timestamp}`, ticker: `MSFT`, url: `${babbl_api_sorted_articles[16].url}`, title: `"${babbl_api_sorted_articles[16].title}"`, mentions: `${babbl_api_sorted_articles[16].entities}`, score: `${Number(babbl_api_sorted_articles[16].optimism - babbl_api_sorted_articles[16].pessimism).toFixed(2)}` },
    { id: 18, date: `${babbl_api_sorted_articles[17].timestamp}`, ticker: `MSFT`, url: `${babbl_api_sorted_articles[17].url}`, title: `"${babbl_api_sorted_articles[17].title}"`, mentions: `${babbl_api_sorted_articles[17].entities}`, score: `${Number(babbl_api_sorted_articles[17].optimism - babbl_api_sorted_articles[17].pessimism).toFixed(2)}` },

    //3 most recent articles from NVDA
    { id: 19, date: `${babbl_api_sorted_articles[18].timestamp}`, ticker: `NVDA`, url: `${babbl_api_sorted_articles[18].url}`, title: `"${babbl_api_sorted_articles[18].title}"`, mentions: `${babbl_api_sorted_articles[18].entities}`, score: `${Number(babbl_api_sorted_articles[18].optimism - babbl_api_sorted_articles[18].pessimism).toFixed(2)}` },
    { id: 20, date: `${babbl_api_sorted_articles[19].timestamp}`, ticker: `NVDA`, url: `${babbl_api_sorted_articles[19].url}`, title: `"${babbl_api_sorted_articles[19].title}"`, mentions: `${babbl_api_sorted_articles[19].entities}`, score: `${Number(babbl_api_sorted_articles[19].optimism - babbl_api_sorted_articles[19].pessimism).toFixed(2)}` },
    { id: 21, date: `${babbl_api_sorted_articles[20].timestamp}`, ticker: `NVDA`, url: `${babbl_api_sorted_articles[20].url}`, title: `"${babbl_api_sorted_articles[20].title}"`, mentions: `${babbl_api_sorted_articles[20].entities}`, score: `${Number(babbl_api_sorted_articles[20].optimism - babbl_api_sorted_articles[20].pessimism).toFixed(2)}` },

    //3 most recent articles from OS
    { id: 22, date: `${babbl_api_sorted_articles[21].timestamp}`, ticker: `OS`, url: `${babbl_api_sorted_articles[21].url}`, title: `"${babbl_api_sorted_articles[21].title}"`, mentions: `${babbl_api_sorted_articles[21].entities}`, score: `${Number(babbl_api_sorted_articles[21].optimism - babbl_api_sorted_articles[21].pessimism).toFixed(2)}` },
    { id: 23, date: `${babbl_api_sorted_articles[22].timestamp}`, ticker: `OS`, url: `${babbl_api_sorted_articles[22].url}`, title: `"${babbl_api_sorted_articles[22].title}"`, mentions: `${babbl_api_sorted_articles[22].entities}`, score: `${Number(babbl_api_sorted_articles[22].optimism - babbl_api_sorted_articles[22].pessimism).toFixed(2)}` },
    { id: 24, date: `${babbl_api_sorted_articles[23].timestamp}`, ticker: `OS`, url: `${babbl_api_sorted_articles[23].url}`, title: `"${babbl_api_sorted_articles[23].title}"`, mentions: `${babbl_api_sorted_articles[23].entities}`, score: `${Number(babbl_api_sorted_articles[23].optimism - babbl_api_sorted_articles[23].pessimism).toFixed(2)}` },

     //3 most recent articles from PLTR
     { id: 25, date: `${babbl_api_sorted_articles[24].timestamp}`, ticker: `PLTR`, url: `${babbl_api_sorted_articles[24].url}`, title: `"${babbl_api_sorted_articles[24].title}"`, mentions: `${babbl_api_sorted_articles[24].entities}`, score: `${Number(babbl_api_sorted_articles[24].optimism - babbl_api_sorted_articles[24].pessimism).toFixed(2)}` },
     { id: 26, date: `${babbl_api_sorted_articles[25].timestamp}`, ticker: `PLTR`, url: `${babbl_api_sorted_articles[25].url}`, title: `"${babbl_api_sorted_articles[25].title}"`, mentions: `${babbl_api_sorted_articles[25].entities}`, score: `${Number(babbl_api_sorted_articles[25].optimism - babbl_api_sorted_articles[25].pessimism).toFixed(2)}` },
     { id: 27, date: `${babbl_api_sorted_articles[26].timestamp}`, ticker: `PLTR`, url: `${babbl_api_sorted_articles[26].url}`, title: `"${babbl_api_sorted_articles[26].title}"`, mentions: `${babbl_api_sorted_articles[26].entities}`, score: `${Number(babbl_api_sorted_articles[26].optimism - babbl_api_sorted_articles[26].pessimism).toFixed(2)}` },

       //3 most recent articles from TSLA
       { id: 28, date: `${babbl_api_sorted_articles[27].timestamp}`, ticker: `TSLA`, url: `${babbl_api_sorted_articles[27].url}`, title: `"${babbl_api_sorted_articles[27].title}"`, mentions: `${babbl_api_sorted_articles[27].entities}`, score: `${Number(babbl_api_sorted_articles[27].optimism - babbl_api_sorted_articles[27].pessimism).toFixed(2)}` },
       { id: 29, date: `${babbl_api_sorted_articles[28].timestamp}`, ticker: `TSLA`, url: `${babbl_api_sorted_articles[28].url}`, title: `"${babbl_api_sorted_articles[28].title}"`, mentions: `${babbl_api_sorted_articles[28].entities}`, score: `${Number(babbl_api_sorted_articles[28].optimism - babbl_api_sorted_articles[28].pessimism).toFixed(2)}` },
       { id: 30, date: `${babbl_api_sorted_articles[29].timestamp}`, ticker: `TSLA`, url: `${babbl_api_sorted_articles[29].url}`, title: `"${babbl_api_sorted_articles[29].title}"`, mentions: `${babbl_api_sorted_articles[29].entities}`, score: `${Number(babbl_api_sorted_articles[29].optimism - babbl_api_sorted_articles[29].pessimism).toFixed(2)}` },
   
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