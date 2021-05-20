import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import userArticlesSaga from './user_articles.saga';
import populatedTickersSaga from './populated_tickers.saga';
import fetchApiArticlesSaga from './babbl_api_articles.saga';
import topMoversSaga from './top_movers.saga';
import userWatchlistSaga from './user_watchlist.saga';
import tickerSnippetsSaga from './ticker_snippets.saga';
import tickersSaga from './ticker.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    userArticlesSaga(),
    populatedTickersSaga(),
    fetchApiArticlesSaga(),
    topMoversSaga(),
    userWatchlistSaga(),
    tickerSnippetsSaga(),
    tickersSaga(),
  ]);
}
