import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
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
    root: {
    minWidth: '20vw',
    width: '20vw',
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