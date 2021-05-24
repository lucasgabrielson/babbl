import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function FlexLayoutGrid() {
  
  const populated_tickers = useSelector((store) => store.populated_tickers);

  const columns = [
    { field: 'Ticker', headerName: 'Ticker', width: 100},
    { field: 'Price', headerName: 'Price', width: 100},
    { field: 'Mentions', headerName: 'Mentions', width: 110},
    
 
  ];
  
  const rows = [


    // { id: 1, 
    //   Ticker: `${populated_tickers.data[0].ticker}`,

    //   Mentions: `${populated_tickers.data[0].mentions}`},
    { id: 1, Ticker: 'APPL', Price: '$75', Mentions: '-0.55' },
    { id: 2, Ticker: 'APPL', Price: '$75', Mentions: '-0.55' },
    { id: 3, Ticker: 'DIS', Price: '$30', Mentions: '-0.55' },
    { id: 4, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 5, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 6, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 7, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 8, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 9, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
    { id: 10, Ticker: 'LYFT', Price: '$120', Mentions: '-0.55' },
  ];

  
  

  return (

    <div style={{ height: '503px', width: '345px', }}>
      <div style={{ display: 'flex', flexDirection: 'column',  height: '100%', }}>
        <div style={{ flexGrow: 1, }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} hideFooter={true} />
        </div>
      </div>
    </div>
    
    
  

  );
}