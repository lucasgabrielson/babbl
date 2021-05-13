import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;