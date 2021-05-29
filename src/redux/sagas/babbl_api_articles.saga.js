import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// action.payload should be tickers in a string in the form 'APPL, AMZN, ... etc'

function* fetchApiArticles(action) {
    try {
        console.log( 'fetchApiArticles', action.payload.tickers );
        const response = yield axios.get(`/api/babbl_api_articles/?tickers=${action.payload.tickers}`);
        yield put({ type: 'SET_API_ARTICLES', payload: response.data} )
    } catch (error) {
        console.log('Error getting articles from api', error);
    }
}


function* fetchSortedApiArticles(action) {

    const finalArray = [];

    try {
        console.log( 'fetchApiArticles', action.payload.tickers );
        const response = yield axios.get(`/api/babbl_api_articles/?tickers=${action.payload.tickers}`);

        const AAPL_articles = response.data.AAPL;
        const AMC_articles = response.data.AMC;
        const AMD_articles = response.data.AMD;
        const ARKK_articles = response.data.ARKK;
        const EV_articles = response.data.EV;
        const MSFT_articles = response.data.MSFT;
        const NVDA_articles = response.data.NVDA;
        const OS_articles = response.data.OS;
        const PLTR_articles = response.data.PLTR;
        const TSLA_articles = response.data.TSLA;
        const PTON_articles = response.data.PTON;
        const SHOP_articles = response.data.SHOP;

        const filterSnippetsArray = () => {
    

            if(AAPL_articles.length != 0){
            AAPL_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
            if(AMC_articles.length != 0){
            AMC_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(AMD_articles.length != 0){
            AMD_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(ARKK_articles.length != 0){
            ARKK_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(EV_articles.length != 0){
            EV_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(MSFT_articles.length != 0){
            MSFT_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(NVDA_articles.length != 0){
            NVDA_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(OS_articles.length != 0){
            OS_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(PLTR_articles.length != 0){
            PLTR_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(PTON_articles.length != 0){
            PTON_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(SHOP_articles.length != 0){
            SHOP_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
          if(TSLA_articles.length != 0){
            TSLA_articles.forEach(snippet => {
              finalArray.push(snippet)
            });
          }
                 
            }

            filterSnippetsArray();


        yield put({ type: 'SET_API_SORTED_ARTICLES', payload: finalArray} )


    } catch (error) {
        console.log('Error getting sorted articles from api', error);
    }
}

function* fetchApiArticlesSaga() {
    yield takeLatest('FETCH_API_ARTICLES', fetchApiArticles);
    yield takeLatest('FETCH_SORTED_API_ARTICLES', fetchSortedApiArticles);
}

export default fetchApiArticlesSaga;