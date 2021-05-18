import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '400px',
    height: '75px',
    border: '2px solid gray',
    borderRadius: '5px'
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <h3>TESLA</h3>
      <h5>$575</h5>
      <h5>+0.30</h5>
      <h5>-0.75</h5>
    </div>
  );
}