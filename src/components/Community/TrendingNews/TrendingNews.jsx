import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
const columns = [
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'title', headerName: 'Title',  width: 300},
    { field: 'source', headerName: 'Source', width: 130 },
    { field: 'mentions', headerName: 'Mentions', width: 130 },
    { field: 'score', headerName: 'Babbl Score', width: 130 },
 
  ];
  
  const rows = [
    { id: 1, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45' },
    { id: 2, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 3, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 5, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
  ];

function TrendingNews(){


    return(
        <>
        <div style={{ height: 400, width: '68%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
        </>
    )
}

export default TrendingNews;