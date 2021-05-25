import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import AutoComplete from '../AppBar/AutoComplete';
import BookmarksAppBar from '../LandingPageBabbl/views/BookmarksAppBar';
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
    const params = useParams();
    return(
        <div>
            <BookmarksAppBar />
            {bookmarks !== undefined &&
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={bookmarks} columns={columns} pageSize={5} />
            </div>
            }
            {JSON.stringify(params)}
        </div>
    )
}

export default Bookmarks;