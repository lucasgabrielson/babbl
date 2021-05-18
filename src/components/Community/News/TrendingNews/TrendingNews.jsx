import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'title', headerName: 'Title',  width: 300},
    { field: 'source', headerName: 'Source', width: 300 },
    { field: 'mentions', headerName: 'Mentions', width: 300 },
    { field: 'score', headerName: 'Babbl Score', width: 150 },
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
      width: 260
  },
 
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
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
        </>
    )
}

export default TrendingNews;