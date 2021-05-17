import React from 'react';
import './SnippetsCarousel.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
   
    
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    flexWrap: 'nowrap',
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    // background: 'gray',
    
  },
  title: {
    color: theme.palette.primary.light,
    padding: '10px',
  },
  titleBar: {
    position: 'absolute',
    display: 'flex',
    height: 'fit-content',
    background: 'white',
    
    
      
  },
  GridListTile: {
    position: 'relative',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '2px 5px 5px 5px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  
  
}));



 
  let tileData = [
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    {
      snippet: '"By some estimates, the Covid-19 diagnostics business coule fall by 35% in the next year, which helps explain the stonks steep discount. But Jefferies analyst Raj Denhoy thinks thos concerns are overblown."',
      source: 'CNN',
      author: 'author',
    },
    
  ];
 
export default function SingleLineGridList() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3.5}>
        {tileData.map((tile) => (
          <GridListTile className={classes.GridListTile} key={tile.img}
          style={{height: 300, padding: '20px 20px 20px 20px', width: '300px',}}
          >
            <p>{tile.snippet} </p> 
            <hr />
            
            <GridListTileBar
              title={tile.source}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`Source `}>
                  <BookmarkBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

