import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**
 * action.payload should be an object 
 *  {
 *      tickers: 'APPL, AMZN, ... etc'
 *      days: integer
 *      max: integer
 *      type: boolean [optional]
 *  }
 *  */ 

function* fetchTickerSnippets(action) {
    try {
        console.log( 'fetchTickerSnippets' );
        const response = yield axios.get(`/api/ticker_snippets/?tickers=${action.payload.tickers}&days=${action.payload.days}&max=${action.payload.max}`);
        yield put({ type: 'SET_TICKER_SNIPPETS', payload: response.data} )
    } catch (error) {
        console.log('Error getting snippets from api', error);
    }
}

function* fetchTickerSnippetsCommunity(action) {
    try {
        console.log( 'fetchTickerSnippetsCommunity' );
        const response = yield axios.get(`/api/ticker_snippets/?tickers=${action.payload.tickers}&days=${action.payload.days}&max=${action.payload.max}&type=${action.payload.type}`);
        yield put({ type: 'SET_TICKER_SNIPPETS', payload: response.data} )
    } catch (error) {
        console.log('Error getting snippets from api', error);
    }
}

function* fetchTickerSnippetsSaga() {
    yield takeLatest('FETCH_TICKER_SNIPPETS', fetchTickerSnippets);
    yield takeLatest('FETCH_TICKER_SNIPPETS_COMMUNITY', fetchTickerSnippetsCommunity);
}

export default fetchTickerSnippetsSaga;