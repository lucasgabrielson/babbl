import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    cardGrid: {
        padding: '20x 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '100%' //16:9 ratio
    },
    cardContent:{
        flexGrow: 1,
    }
}));

export default useStyles;