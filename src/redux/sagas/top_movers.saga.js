import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* topMovers() {
    try {
        console.log( 'topMovers' );
        const response = yield axios.get(`/api/top_movers`);
        yield put({ type: 'SET_TOP_MOVERS', payload: response.data} )
    } catch (error) {
        console.log('Error getting top movers from api', error);
    }
}

function* topMoversSaga() {
    yield takeLatest('FETCH_TOP_MOVERS', topMovers);
}

export default topMoversSaga;