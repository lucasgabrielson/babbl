import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'title', headerName: 'Title',  width: 300},
    { field: 'source', headerName: 'Source', width: 300 },
    { field: 'mentions', headerName: 'Mentions', width: 300 },
    { field: 'score', headerName: 'Babbl Score', width: 150 },
 
  ];
  
  const rows = [
    { id: 1, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45' },
    { id: 2, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 3, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
    { id: 5, date: 'May 12, 2021', source: 'Yahoo', title: '"Stonks are going up!"', mentions: 'AMZN, GME', score: '< - 0.45'  },
  ];

function Bookmarks(){
    useEffect(() => { dispatch({type: 'FETCH_USER_WATCHLIST', payload: 1})}, []);
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.userWatchlist)

    return(
        <>
        <h1>Hello</h1>
        {JSON.stringify(bookmarks)}
        </>
    )
}

export default Bookmarks;