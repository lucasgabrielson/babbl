import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '20vw',
    width: '20vw',
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
  tickerOne: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Top 3 Movers
          </Typography>

        <div className={classes.tickerOne}>
        
          <Typography className={classes.pos} color="primary">
            TESLA
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            +0.45
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            -0.30
          </Typography>

        </div>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
