import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    Typography, 
    Button,
    Card, CardActions, CardContent, CardMedia,  
    Grid, 
    Container
} from '@material-ui/core';
import useStyles from './SnippetStyle'

const Snippet = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const snippetz = useSelector( store => store.snippet);

    useEffect(() => {
        dispatch({ type: 'FETCH_SNIPPET' });
    }, []);

    return (
        <div>
            {console.log(snippetz)}
                <Container className={classes.cardGrid} >
                        <Grid container spacing={4}>
                            {snippetz.map((snippet)=>(         
                                <Grid item key={snippet.source} xs={12}>
                                    <Card width={1} className={classes.card}>
                                        <CardContent className={classes.cardContent}>
                                            <div className={classes.tickerOne}>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Source
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Date
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Outlook
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Feeling
                                                </Typography>
                                            </div>
                                            <div className={classes.tickerOne}>
                                                <Typography className={classes.pos} color="primary">
                                                    CNN
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    May 10th, 2021
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    Future-Outlook
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    Pessimistic
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" component="p">
                                                "By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, 
                                                which helps explain the stonk's steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card width={1} className={classes.card}>
                                        <CardContent className={classes.cardContent}>
                                            <div className={classes.tickerOne}>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Source
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Date
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Outlook
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Feeling
                                                </Typography>
                                            </div>
                                            <div className={classes.tickerOne}>
                                                <Typography className={classes.pos} color="primary">
                                                    CNN
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    May 10th, 2021
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    Past-History
                                                </Typography>
                                                <Typography className={classes.pos} color="primary">
                                                    Optimistic
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" component="p">
                                                "By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, 
                                                which helps explain the stonk's steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}   
                        </Grid>
                </Container>
        </div>
    )
}

export default Snippet;
