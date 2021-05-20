import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* apiUserArticles(action) {
    try {
        console.log( 'apiUserArticles', action.payload );
        let articles = await Promise.all(
            action.payload
        )
        const response = yield axios.get(`/api/top_movers`);
        yield put({ type: 'SET_TOP_MOVERS', payload: response.data} )
    } catch (error) {
        console.log('Error getting articles from api', error);
    }
}

function* apiUserArticlesSaga() {
    yield takeLatest('FETCH_API_USER_ARTCILES', apiUserArticles);
}

export default apiUserArticlesSaga;