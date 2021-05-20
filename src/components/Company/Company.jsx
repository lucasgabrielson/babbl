import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Overview from '../Company/Overview/Overview';
import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';


const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Company = () => {

  const classes = useStyles();

  return (
    <div className={classes.communityContainer}>
      <AppBar />
      <Overview />
      <Footer />
    </div>
  )
}

export default Company;
