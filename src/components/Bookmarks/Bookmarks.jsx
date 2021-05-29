import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import BookmarksAppBar from '../LandingPageBabbl/views/BookmarksAppBar';
import IconButton from '@material-ui/core/IconButton';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'ticker', headerName: 'Ticker', width: 300 },
    { field: 'title', headerName: 'Title',  width: 300},
    { field: 'mentions', headerName: 'Mentions', width: 300 },
    { field: 'score', headerName: 'Babbl Score', width: 150 },
    {
        field: "url",
        headerName: "View",
        disableClickEventBubbling: true,
        renderCell: (params) => {
        const onClick = () => {
            console.log('url', params.row);
        };
        return <IconButton variant="contained" size="small" onClick={onClick}>
                  <ChromeReaderModeIcon />
                </IconButton>
        },
        width: 100
    },
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
        </div>
    )
}

export default Bookmarks;