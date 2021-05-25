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
