import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import Articles from '../Company/Articles/Articles';
import Sentiments from '../Company/Sentiments/Sentiments';
import CompanySnippets from '../Company/CompanySnippets/CompanySnippets';
import LineChart from '../Company/LineChart/LineChart';
import TopTen from '../Company/TopTen/TopTen';

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
    carousel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90vw',
      height: '350px',
      margin: '20px',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
    },
    chart: {
      display: 'flex',
      justifyContent: 'center',
    },
    topten: {
      display: 'flex',
      margin: '20px',
      alignItems: 'center',
      justifyContent: 'center',
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
        <div className={classes.chart}>
        <LineChart />
        </div>
        <div className={classes.sentiments}>
        <Sentiments />
        </div>
        <div className={classes.topten}>
          <TopTen />
        </div>
        <div className={classes.carousel}>
        <CompanySnippets />
        </div>
        <div className={classes.articles}>
        <Articles />
        </div>
        </>
    )
}

export default Company