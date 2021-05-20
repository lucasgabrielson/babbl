import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Overview from '../Company/Overview/Overview';

const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Company = () => {

  const classes = useStyles();

  return (
    <div className={classes.communityContainer}>
      <Overview />
    </div>
  )
}

export default Company;
