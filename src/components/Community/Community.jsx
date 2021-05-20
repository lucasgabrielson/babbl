import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

//import Tabs from '../Community/Tabs/Tabs';
import Overview from '../Community/Overview/Overview';
import News from '../Community/News/News';

const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Community = () => {
  const user = useSelector( store => store.user)
  const dispatch = useDispatch();
  let latch = false;
  if( user !== undefined && !latch ) {
    latch = true
    dispatch({type: 'FETCH_USER_WATCHLIST', payload: user.id});
    dispatch({type: 'FETCH_USER_ARTICLES', payload: user.id});
  }

  const classes = useStyles();

  return (
    <div className={classes.communityContainer}>
      <Overview />
      {/* <News /> */}
    </div>
  )
}

export default Community;
