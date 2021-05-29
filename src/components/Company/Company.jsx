import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Overview from '../Company/Overview/Overview';
import CompanyAppBar from '../LandingPageBabbl/views/CompanyAppBar';

const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Company = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector( store => store.user)



  const addToWatchlist = (params) => {
      console.log('Clicked add company:', params, user.id, );
      let obj = {
        ticker: params,
        user_id: user.id,
        mentions: 960
      }
      dispatch({type: 'ADD_WATCHLIST_ARTICLE', payload: obj});

  }

  return (
    <div>
    <CompanyAppBar />
    <div className={classes.communityContainer}>
      <Overview addToWatchlist={addToWatchlist}/>
    </div>
    </div>
  )
}

export default Company;
