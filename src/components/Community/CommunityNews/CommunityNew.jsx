import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    {field: 'title', headerName: 'Title',  width: 300},
    { field: 'source', headerName: 'Source', width: 300 },
    { field: 'mentions', headerName: 'Mentions', width: 300 },
    { field: 'score', headerName: 'Babbl Score', width: 150 },
 
  ];
  
  const rows = [
    { id: 1, date: 'May 13, 2021', source: 'MarketWatch', title: '"Stonks are going down!"', mentions: 'TSLA, NFLX', score: '< - 0.15' },
    { id: 2, date: 'May 13, 2021', source: 'MarketWatch', title: '"Stonks are going down!"', mentions: 'TLSA, NFLX', score: '< - 0.15' },
    { id: 3, date: 'May 13, 2021', source: 'MarketWatch', title: '"Stonks are going down!"', mentions: 'TSLA, NFLX', score: '< - 0.15' },
    { id: 5, date: 'May 14, 2021', source: 'MarketWatch', title: '"Stonks are going down!"', mentions: 'TSLA, NFLX', score: '< - 0.15' },
  ];

function CommunityNews(){


    return(
        <>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
        </>
    )
}

export default CommunityNews;