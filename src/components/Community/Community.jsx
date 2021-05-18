import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

//import Tabs from '../Community/Tabs/Tabs';
import Overview from '../Community/Overview/Overview';
import News from '../Community/News/News';

<<<<<<< HEAD
    <Overview />
    <News />
=======


const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Community = () => {

  const classes = useStyles();

  return (
    <div className={classes.communityContainer}>
      <Overview />
      {/* <News /> */}
>>>>>>> c3ece2c5e9a188dc589a76aa599302e8cc9968ec
    </div>
  )
}

export default Community;
