import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '200px',
    width: '200px',
    marginBottom: '20px',
    boxShadow: '2px 5px 10px 5px rgba(0, 0, 0, 0.2)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: '20px',
    
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.primary.main,
  },
  neg: {
    marginBottom: 12,
    color: theme.palette.danger.main,
  },
  company: {
    marginBottom: 12,
    color: theme.palette.black.main,
  },
  ticker: {
    display: 'flex',
    justifyContent: 'space-between',
    // color: theme.primary,
  }
}));



export default function SimpleCard() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Top 3 Movers
          </Typography>

        <div className={classes.ticker}>
        
          <Typography className={classes.company} >
            TESLA
          </Typography>

          <Typography className={classes.pos} >
            +0.45
          </Typography>

          <Typography className={classes.neg} >
            -0.30
          </Typography>

        </div>

        <div className={classes.ticker}>
        
          <Typography className={classes.company} >
            TESLA
          </Typography>

          <Typography className={classes.pos} >
            +0.45
          </Typography>

          <Typography className={classes.neg} >
            -0.30
          </Typography>

        </div>

        <div className={classes.ticker}>
        
        <Typography className={classes.company} >
          TESLA
        </Typography>

        <Typography className={classes.pos} >
          +0.45
        </Typography>

        <Typography className={classes.neg} >
          -0.30
        </Typography>

      </div>
        
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
