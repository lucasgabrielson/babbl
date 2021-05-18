import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AutoComplete from './AutoComplete'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '250',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
    link: {
        marginRight: theme.spacing(2),
        textDecoration: 'none',
        color: 'white',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

// Enable for use with drawer for mobile
//   const toggleDrawer = () =>{
//     dispatch({type: 'SET_DRAWER'})
//   }

    const Logout = () =>{
        dispatch({ type: 'LOGOUT' })
        console.log('in Logout');
    }


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
 
          <Typography className={classes.title} variant="h6" noWrap>
            Babbl
          </Typography>
          <div>
            <AutoComplete />
          </div>
            <NavLink className={classes.link} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</NavLink>
            <NavLink className={classes.link} style={{ textDecoration: 'none', color: 'white' }} to="/community">Community</NavLink>
            <NavLink className={classes.link} style={{ textDecoration: 'none', color: 'white' }} to="/about">About</NavLink>
            <NavLink className={classes.link} style={{ textDecoration: 'none', color: 'white' }} to="/bookmarks/1">Bookmarks</NavLink>
            <NavLink className={classes.link} style={{ textDecoration: 'none', color: 'white' }} to="/home" onClick={Logout()}>LogOut</NavLink>
        
          <div className={classes.grow} />
            {/* This will enable a drawer for mobile
            <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            >
            <MenuIcon onClick={() => toggleDrawer()} />
          </IconButton> */}
        </Toolbar>
        
      </AppBar>
    </div>
  );
}