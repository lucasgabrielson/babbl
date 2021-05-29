import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import snippet from './snippet.reducer';
import userArticles from './user_articles.reducer';
import populated_tickers from './populated_tickers.reducer';
import babbl_api_articles from './babbl_api_articles.reducer';
import ticker_snippets from './tickler_snippets.reducer';
import userWatchlist from './user_watchlist.reducer';
import drawer from './drawer.reducer';
import top_movers from './top_movers.reducer';
import tickers from './tickers.reducer';
import timeseries_sentiments from './timeseries_sentiments.reducer';
import timeseries_prices from './timeseries_prices.reducer';
import babbl_api_sorted_articles from './babbl_api_sorted_articles.reducer';

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
  babbl_api_sorted_articles,
  ticker_snippets, // contains the snippets regaridng the ticker(s) requested
  userWatchlist, // contains the tickers in a users watchlist
  drawer, // will open and close drawer
  top_movers, // contains the top and bottom 3 movers
  tickers, // contains price information about the ticker
  timeseries_sentiments, // contains the sentiments scores for stock(s) over a given period of time
  timeseries_prices, // contains the historical prices for a stock over a given period of time

});

export default rootReducer;
