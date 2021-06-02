import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '200px',
    width: '200px',
    marginBottom: '20px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    fontSize: 14,
    marginBottom: '20px',
    borderBottom: '5px solid gray',
    borderRadius: '5px'
    
  },
  headers: {
    fontSize: 12,
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
  }
}));



export default function SimpleCard() {

  const classes = useStyles();
 
  const top_movers = useSelector((store) => store.top_movers);

  const [bottom, setBottom] = React.useState([
   
    {
      ticker: 'AAPL',
      movement: 5.8,
    },
    {
      ticker: 'AMD',
      movement: 10,
    },
    {
      ticker: 'TSLA',
      movement: 8,
    },

  ]);

  React.useEffect(() => {
    const data = localStorage.getItem("bottom_movers");
    if (data) {
      setBottom(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("bottom_movers", JSON.stringify(top_movers.bottom));
  });
  
  return (
    <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Bottom 3 Babbl Movers
        </Typography>
        <div className={classes.ticker}>
          <Typography className={classes.headers} color="textSecondary" gutterBottom>
            Ticker
          </Typography>
          <Typography className={classes.headers} color="textSecondary" gutterBottom>
            Score Change
          </Typography>
        </div>
      {bottom.map(company => ( 
      <div className={classes.ticker}>
      
        <Typography className={classes.company} >
          {company.ticker}
        </Typography>

        <Typography className={classes.pos} >
          {(company.movement).toFixed(2)}%
        </Typography>

      </div>
        ))}  
    </CardContent>
    
  </Card>
  );
}