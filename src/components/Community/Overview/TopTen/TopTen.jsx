import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function FlexLayoutGrid() {
  
  const populated_tickers = useSelector((store) => store.populated_tickers);

 

  const columns = [
    { field: 'Ticker', headerName: 'Ticker', width: 100},
    // { field: 'Price', headerName: 'Price', width: 100},
    { field: 'Mentions', headerName: 'Mentions', width: 110},
    
 
  ];
  
  const rows = [

    { id: 1, 
      Ticker: `${populated_tickers.data[0].ticker}`,
      Mentions: `${populated_tickers.data[0].mentions}`},
    
    { id: 2, 
      Ticker: `${populated_tickers.data[1].ticker}`,
      Mentions: `${populated_tickers.data[1].mentions}`},
    { id: 3, 
      Ticker: `${populated_tickers.data[2].ticker}`,
      Mentions: `${populated_tickers.data[2].mentions}`},
    { id: 4, 
      Ticker: `${populated_tickers.data[3].ticker}`,
      Mentions: `${populated_tickers.data[3].mentions}`},
    { id: 5, 
      Ticker: `${populated_tickers.data[4].ticker}`,
      Mentions: `${populated_tickers.data[4].mentions}`},
    { id: 6, 
      Ticker: `${populated_tickers.data[5].ticker}`,
      Mentions: `${populated_tickers.data[5].mentions}`},
    { id: 7, 
      Ticker: `${populated_tickers.data[6].ticker}`,
      Mentions: `${populated_tickers.data[6].mentions}`},
    { id: 8, 
      Ticker: `${populated_tickers.data[7].ticker}`,
      Mentions: `${populated_tickers.data[7].mentions}`},
    { id: 9, 
      Ticker: `${populated_tickers.data[8].ticker}`,
      Mentions: `${populated_tickers.data[8].mentions}`},
    { id: 10, 
      Ticker: `${populated_tickers.data[9].ticker}`,
      Mentions: `${populated_tickers.data[9].mentions}`},
    
  ];

  

  return (

    <div style={{ height: '503px', width: '250px', }}>
      <div style={{ display: 'flex', flexDirection: 'column',  height: '100%', }}>
        <div style={{ flexGrow: 1, }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} hideFooter={true} />
        </div>
      </div>
    </div>
    
  );
}