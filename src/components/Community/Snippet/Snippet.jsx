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
            This is Snippetz
            {console.log(snippetz)}
            <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {snippetz.map((snippet)=>(
                               
                                <Grid item key={snippet.source} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            {snippet.source}
                                        </Typography>
                                        <Typography>
                                            this is sdf
                                            {snippet.date}
                                        </Typography>
                                        <Typography>
                                            {snippet.outlook}
                                        </Typography>
                                        <Typography>
                                            {snippet.feeling}
                                        </Typography>
                                        <Typography>
                                            {snippet.snippet}
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
