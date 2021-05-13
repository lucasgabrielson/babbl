import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserArticles(action) {
  try {
      console.log( 'fetchUserArticles' );
      const response = yield axios.get(`/api/user_articles/${action.payload}`);
      yield put({ type: 'SET_USER_ARTICLES', payload: response.data} )
  } catch (error) {
      console.log('Error getting user articles from database', error);
    }
}

function* userArticlesSaga() {
  yield takeLatest('FETCH_USER_ARTICLES', fetchUserArticles);
}

export default userArticlesSaga;