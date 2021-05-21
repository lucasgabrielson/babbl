import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* tickers(action) {
    try {
        console.log( 'tickers', action.payload );
        const response = yield axios.get(`/api/tickers/${action.payload.ticker}`);
        yield put({ type: 'SET_TICKERS', payload: response.data} )
    } catch (error) {
        console.log('Error getting tickers from cloud iex api', error);
    }
}  
   
function* allTickers(action) {
    console.log( 'allTickers', action.payload );
    try {
        let tickers =  Promise.all(
            action.payload.map( ticker => {
                 axios.get(`/api/tickers/${ticker}`)    
            })
        )
        yield put({ type: 'SET_TICKERS', payload: tickers} )
    } catch (error) {
        console.log('Error getting all tickers from cloud iex api', error);
    }
}

function* tickersSaga() {
    yield takeLatest('FETCH_TICKERS', tickers);
    yield takeLatest('FETCH_ALL_TICKERS', allickers);
}

export default tickersSaga;