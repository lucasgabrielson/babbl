import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    // color: theme.primary,
  }
}));



export default function SimpleCard() {

  const classes = useStyles();
  
  const top_movers = useSelector((store) => store.top_movers);

  console.log('top_movers', top_movers.top);

  const [top, setTop] = React.useState([
   
    {
      ticker: 'AMD',
      movement: 5.8,
    },
    {
      ticker: 'AAPL',
      movement: 10,
    },
    {
      ticker: 'TSLA',
      movement: 8,
    },

  ]);

  React.useEffect(() => {
    const data = localStorage.getItem("top_movers");
    if (data) {
      setTop(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("top_movers", JSON.stringify(top_movers.top));
  });



  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Top 3 Movers
          </Typography>
          <div className={classes.ticker}>
            <Typography className={classes.headers} color="textSecondary" gutterBottom>
              Ticker
            </Typography>
            <Typography className={classes.headers} color="textSecondary" gutterBottom>
              Babbl Score
            </Typography>
          </div>
        {top.map(company => ( 
        <div className={classes.ticker}>
        
          <Typography className={classes.company} >
            {company.ticker}
          </Typography>

          <Typography className={classes.pos} >
            {(company.movement).toFixed(2)}
          </Typography>

         

        </div>
          ))}  
      </CardContent>
      
    </Card>
  );
}
