import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function FlexLayoutGrid() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 4,
  // });

  const columns = [
    { field: 'Ticker', headerName: 'Ticker'},
    { field: 'Bull', headerName: 'Bull'},
    { field: 'Bear', headerName: 'Bear'},
    
 
  ];
  
  const rows = [
    { id: 1, Ticker: 'TESLA', Bull: '+0.45', Bear: '-0.55'},
    { id: 2, Ticker: 'APPL', Bull: '+0.45', Bear: '-0.55' },
    { id: 3, Ticker: 'DIS', Bull: '+0.45', Bear: '-0.55' },
    { id: 4, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 5, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 6, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 7, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 8, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 9, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 10, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
  ];

  return (

    <div style={{ height: '503px', width: '320px', }}>
      <div style={{ display: 'flex', flexDirection: 'column',  height: '100%', }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} pageSize={10}  />
        </div>
      </div>
    </div>
    
    
  

  );
}