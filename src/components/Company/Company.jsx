import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Overview from '../Company/Overview/Overview';
import CompanyAppBar from '../LandingPageBabbl/views/CompanyAppBar';

const useStyles = makeStyles((theme) => ({
 
  communityContainer: {
    margin: '20px',
    
  }
}));

const Company = () => {

  const classes = useStyles();

  return (
    <div>
    <CompanyAppBar />
    <div className={classes.communityContainer}>
      <Overview />
    </div>
    </div>
  )
}

export default Company;
