import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';

const columns = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'title', headerName: 'Title',  width: 300},
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'mentions', headerName: 'Mentions', width: 300 },
  { field: 'score', headerName: 'Babbl Score', width: 150 },
    {
      field: "bookmark",
      headerName: "Bookmark Article",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const dispatch = useDispatch();
        
        const bookmark = (row) => {
          console.log('bookmark', params.row);
          row = {
            userID: params.userID,
            date: params.row.date,
            title: params.row.title,
            source: params.row.source,
            mentions: params.row.mentions,
            link: params.row.link
          }
          dispatch({ type: 'ADD_USER_ARTICLES', payload: row});
      };
      
      return <Button variant="contained" size="small" onClick={()=>bookmark(params.row)}>bookmark</Button>;
      },
      width: 175
  },
 
  ];
  
  const rows = [
    { id: 1, date: '2021-05-26', source: 'Yahoo', title: '"Stonks!"', mentions: 'AMZN, GME', score: '< - 0.45' },
    { id: 2, date: 'May 13, 2021', source: 'Google', title: '"Stonks are!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 3, date: 'May 14, 2021', source: 'Robinhood', title: '"Stonks are going!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 5, date: 'May 15, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
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