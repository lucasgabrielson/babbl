import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import AutoComplete from '../AppBar/AutoComplete';
const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'title', headerName: 'Title',  width: 300},
    { field: 'source', headerName: 'Source', width: 300 },
    { field: 'mentions', headerName: 'Mentions', width: 300 },
    { field: 'score', headerName: 'Babbl Score', width: 150 },
 
  ];
  

function Bookmarks(){
    const dispatch = useDispatch();
    const bookmarks = useSelector(store => store.userArticles)

    return(
        <>
        <AutoComplete />
        {bookmarks !== undefined &&
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={bookmarks} columns={columns} pageSize={5} checkboxSelection />
        </div>
        }
        </>
    )
}

export default Bookmarks;