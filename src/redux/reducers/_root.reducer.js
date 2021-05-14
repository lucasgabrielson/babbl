import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import snippet from './snippet.reducer';
import userArticles from './user_articles.reducer';
import populated_tickers from './populated_tickers.reducer';
import babbl_api_articles from './babbl_api_articles.reducer';
import ticker_snippets from './tickler_snippets.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  snippet, // contains data for snippet
  userArticles, // contains the articles for the specific user
  populated_tickers, // contains the available tickers with their corresponding mentions
  babbl_api_articles, // contains the articles regarding the ticker(s) requested
  ticker_snippets, // contains the snippets regaridng the ticker(s) requested
});

export default rootReducer;
