import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SnippetsCarousel.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';



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
  subtitle: {
    color: theme.palette.secondary.light,
  },
  titleBar: {
    position: 'absolute',
    display: 'flex',
    height: 'fit-content',
    background: 'white',
    
    
      
  },
  GridListTile: {
    position: 'relative',
    margin: '20px',
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

  const ticker_snippets = useSelector((store) => store.ticker_snippets);
  let finalArray = [];

  // let AAPL_snippets = ticker_snippets.AAPL.snippets;
  let AMC_snippets = ticker_snippets.AMC.snippets;
  // let AMD_snippets = ticker_snippets.AMD.snippets;
  // let ARKK_snippets = ticker_snippets.ARKK.snippets;
  // let EV_snippets = ticker_snippets.EV.snippets;
  // let MSFT_snippets = ticker_snippets.MSFT.snippets;
  // let NVDA_snippets = ticker_snippets.NVDA.snippets;
  // let OS_snippets = ticker_snippets.OS.snippets;
  // let PLTR_snippets = ticker_snippets.PLTR.snippets;
  // let PTON_snippets = ticker_snippets.PTON.snippets;
  // let SHOP_snippets = ticker_snippets.SHOP.snippets;
  // let TSLA_snippets = ticker_snippets.TSLA.snippets;

  

  const snippetsArray = () => {

    // let AAPL_snippets = ticker_snippets.AAPL.snippets;

    console.log('AMC Snippets', AMC_snippets);
  }
  console.log('FinalArray', finalArray);

  snippetsArray();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {AMC_snippets.map((tile) => (
          <GridListTile className={classes.GridListTile} key={tile.img}
          style={{height: 300, padding: '20px 20px 20px 20px', width: '300px',}}
          >
            <p>{tile.title} </p> 
            <hr />
            <p>{tile.text}</p>
            
            <GridListTileBar
              title={tile.tick}
              subtitle={tile.timestamp}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                subtitle: classes.subtitle,
              }}
              actionIcon={
                <IconButton>
                  <ChromeReaderModeIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

