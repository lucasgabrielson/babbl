import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserArticles(action) {
  try {
      console.log( 'fetchUserArticles', action.payload );
      const response = yield axios.get(`/api/user_articles/${action.payload}`);
      yield put({ type: 'SET_USER_ARTICLES', payload: response.data} )
  } catch (error) {
      console.log('Error getting user articles from database', error);
  }
}

function* addUserArticle(action) {
  try {
      console.log( 'addUserArticle' );
      const response = yield axios.post(`/api/user_articles/?id=${action.payload.userID}&date=${action.payload.date}&title=${action.payload.title}&ticker=${action.payload.ticker}&mentions=${action.payload.mentions}&score=${action.payload.score}&link${action.payload.link}`);
      yield put({ type: 'FETCH_USER_ARTICLES', payload: action.payload.userID } )
  } catch (error) {
      console.log('Error adding user articles from database', error);
  }
}

function* deleteUserArticle(action) {
  try {
      console.log( 'deleteUserArticle' );
      const response = yield axios.delete(`/api/user_articles/?id=${action.payload.userID}&link=${action.payload.link}`);
      yield put({ type: 'FETCH_USER_ARTICLES', payload: action.payload.userID } )
  } catch (error) {
      console.log('Error deleting user articles from database', error);
  }  
}

function* userArticlesSaga() {
  yield takeLatest('FETCH_USER_ARTICLES', fetchUserArticles);
  yield takeLatest('ADD_USER_ARTICLES', addUserArticle);
  yield takeLatest('DELETE_USER_ARTICLES', deleteUserArticle)
}

export default userArticlesSaga;