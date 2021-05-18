import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import Articles from '../Company/Articles/Articles';
import Sentiments from '../Company/Sentiments/Sentiments';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Company (){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h2" component="h2">
        Amazon.com, Inc. (AMZN) +22.80 (+.32%) 1.61T 60.72
        </Typography>
      </CardContent>
    </Card>
        <Sentiments />
        <Articles />
        </>
    )
}

export default Company