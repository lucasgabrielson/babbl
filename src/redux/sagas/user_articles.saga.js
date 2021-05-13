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

function* addUserArticles(action) {
  try {
      console.log( 'fetchUserArticles' );
      const response = yield axios.post(`/api/user_articles/${action.payload}`);
      yield put({ type: 'SET_USER_ARTICLES', payload: response.data} )
  } catch (error) {
      console.log('Error getting user articles from database', error);
  }
}

function* userArticlesSaga() {
  yield takeLatest('FETCH_USER_ARTICLES', fetchUserArticles);
  yield takeLatest('ADD_USER_ARTICLES', addUserArticles);
}

export default userArticlesSaga;