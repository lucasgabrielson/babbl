import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

//import Tabs from '../Community/Tabs/Tabs';
import Overview from '../Community/Overview/Overview';
import News from '../Community/News/News';
import CommunityAppBar from '../LandingPageBabbl/views/CommunityAppBar';

const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Community = () => {
  const user = useSelector( store => store.user);
  const populated_tickers = useSelector( store => populated_tickers)
  const dispatch = useDispatch();
  let latch = false;
  if( user !== undefined &&  populated_tickers !== undefined && !latch ) {
    latch = true
    dispatch({type: 'FETCH_USER_WATCHLIST', payload: user.id});
    dispatch({type: 'FETCH_USER_ARTICLES', payload: user.id});
    dispatch({type: 'FETCH_ALL_TICKERS', payload: populated_tickers.meta.all_tickers})
  }

  const classes = useStyles();

  return (
    <div>
    <CommunityAppBar />
      <div className={classes.communityContainer}>
      <Overview />
      {/* <News /> */}
      </div>
    </div>
  )
}

export default Community;
