import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**
 * action.payload should be an object 
 *  {
 *      tickers: 'APPL, AMZN, ... etc'
 *      days: integer
 *  }
 *  */ 

function* timeseriesSentiments(action) {
    try {
        console.log( 'timeseriesSentiments', action.payload );
        const response = yield axios.get(`/api/timeseries_sentiments/?days=${action.payload.days}&tickers=${action.payload.tickers}`);
        yield put({ type: 'SET_TIMESERIES_SENTIMENTS', payload: response.data} )
    } catch (error) {
        console.log('Error getting timeseries sentiments from api', error);
    }
}

function* timeseriesSentimentsSaga() {
    yield takeLatest('FETCH_TIMESERIES_SENTIMENTS', timeseriesSentiments);
}

export default timeseriesSentimentsSaga;