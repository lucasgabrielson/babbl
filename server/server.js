const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const userArticlesRouter = require('./routes/user_articles.router');
const populatedTickersRouter = require('./routes/populated_tickers.router');
const babblApiArticlesRouter = require('./routes/babbl_api_articles.router');
const tickerSnippetsRouter = require('./routes/ticker_snippets.router');
const userWatchlistRouter = require('./routes/user_watchlist.router');
const topMoversRouter = require('./routes/top_movers.router');
const cloudIexTickersRouter = require('./routes/tickers.router');
const timeseriesSentimentsRouter = require('./routes/timeseries_sentiments.router');
const timeseriesPricesRouter = require('./routes/timeseries_prices.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/user_articles/', userArticlesRouter)
app.use('/api/populated_tickers', populatedTickersRouter);
app.use('/api/babbl_api_articles', babblApiArticlesRouter);
app.use('/api/ticker_snippets/', tickerSnippetsRouter);
app.use('/api/user_watchlist/', userWatchlistRouter);
app.use('/api/top_movers', topMoversRouter)
app.use('/api/tickers', cloudIexTickersRouter);
app.use('/api/timeseries_sentiments', timeseriesSentimentsRouter);
app.use('/api/timeseries_prices', timeseriesPricesRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
