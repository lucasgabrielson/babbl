import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**
 * action.payload should be an object 
 *  {
 *      ticker: 'APPL'
 *      days: '5d, 1m, 6m, ytd, 1y'
 *  }
 *  */ 

function* timeseriesPrices(action) {
    try {
        console.log( 'timeseriesPrices', action.payload );
        const response = yield axios.get(`/api/timeseries_prices/?days=${action.payload.days}&tickers=${action.payload.ticker}`);
        yield put({ type: 'SET_TIMESERIES_PRICES', payload: response.data} )
    } catch (error) {
        console.log('Error getting timeseries sentiments from api', error);
    }
}

function* timeseriesPricesSaga() {
    yield takeLatest('FETCH_TIMESERIES_PRICES', timeseriesPrices);
}

export default timeseriesPricesSaga;