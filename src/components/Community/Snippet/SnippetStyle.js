import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    minWidth: '20vw',
    width: '20vw',
    },
    cardGrid: {
        padding: '20x 0',
        width: '100%',
        padding: '10px'
    },
    card:{
        margin: '10px'
    },
    cardMedia:{
        paddingTop: '100%' //16:9 ratio
    },
    cardContent:{
        flexGrow: 1,
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