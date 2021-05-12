import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { Drawer as MUIDrawer } from '@material-ui/core/';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Landscape from '@material-ui/icons/Landscape';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {FaSeedling} from 'react-icons/fa'
import {FaListOl} from 'react-icons/fa'

const Drawer = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const closeDrawer = () => {
        dispatch({type: 'UNSET_DRAWER'})    
    }
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        dispatch({type: 'UNSET_DRAWER'})    
        history.push('/')
    }

    const drawerState = useSelector((store) => store.drawer)

    const useStyles = makeStyles({
        MuiDrawer: {
            backgroundColor: "burlywood",
            color: 'white'
        },
        menuBtn: {
            textDecoration: 'none'
        },
    });
    const classes = useStyles();
    return(
        <MUIDrawer classes={{paper: classes.MuiDrawer}} onClose={() => closeDrawer()}  open={drawerState}>
            <List>
                <Link to = {`/dashboard/${user.id}`} style={{ textDecoration: 'none', color: 'white' }} onClick={() => closeDrawer()}>
                    <ListItem >
                        {<ListItemIcon><HomeIcon/></ListItemIcon>}
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </Link>
                
                <Link to = '/community' style={{ textDecoration: 'none', color: 'white' }} onClick={() => closeDrawer()}>
                    <ListItem >
                        {<ListItemIcon><FaSeedling/></ListItemIcon>}
                        <ListItemText primary='Community' />
                    </ListItem>
                </Link>

                <Link to = {`/bookmarks/${user.id}`} style={{ textDecoration: 'none', color: 'white' }} onClick={() => closeDrawer()}>
                    <ListItem >
                        {<ListItemIcon><Landscape/></ListItemIcon>}
                        <ListItemText primary='Bookmarks' />
                    </ListItem>
                </Link>

                <Link to = {`/about`} params={user.id} style={{ textDecoration: 'none', color: 'white' }} onClick={() => closeDrawer()}>
                    <ListItem >
                        {<ListItemIcon><FavoriteBorderIcon /></ListItemIcon>}
                        <ListItemText primary='About' />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem onClick={() => logOut()}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </MUIDrawer>
    )
}

export default Drawer;