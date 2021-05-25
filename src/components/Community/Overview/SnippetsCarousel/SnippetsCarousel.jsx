import React, {useState, useEffect} from 'react';
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




  
export default function SingleLineGridList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const user = useSelector( store => store.user)
  const [finalArray, setFinalArray] = useState([]);

  

  const ticker_snippets = useSelector((store) => store.ticker_snippets);
 

  const AAPL_snippets = ticker_snippets.AMC.snippets;
  const AMC_snippets = ticker_snippets.AMC.snippets;
  const AMD_snippets = ticker_snippets.AMD.snippets;
  const ARKK_snippets = ticker_snippets.ARKK.snippets;
  const EV_snippets = ticker_snippets.EV.snippets;
  const MSFT_snippets = ticker_snippets.MSFT.snippets;
  const NVDA_snippets = ticker_snippets.NVDA.snippets;
  const OS_snippets = ticker_snippets.OS.snippets;
  const PLTR_snippets = ticker_snippets.PLTR.snippets;
  const PTON_snippets = ticker_snippets.PTON.snippets;
  const SHOP_snippets = ticker_snippets.SHOP.snippets;
  const TSLA_snippets = ticker_snippets.TSLA.snippets;

  const filterSnippetsArray = () => {
    

    if(AAPL_snippets.length != 0){
    AAPL_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
    if(AMC_snippets.length != 0){
    AMC_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(AMD_snippets.length != 0){
    AMD_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(ARKK_snippets.length != 0){
    ARKK_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(EV_snippets.length != 0){
    EV_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(MSFT_snippets.length != 0){
    MSFT_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(NVDA_snippets.length != 0){
    NVDA_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(OS_snippets.length != 0){
    OS_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(PLTR_snippets.length != 0){
    PLTR_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(PTON_snippets.length != 0){
    PTON_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(SHOP_snippets.length != 0){
    SHOP_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
  if(TSLA_snippets.length != 0){
    TSLA_snippets.forEach(snippet => {
      setFinalArray(finalArray => [...finalArray, snippet])
    });
  }
      
      
    }
    
  


  React.useEffect(() => {
    
    // setAAPL_snippets(ticker_snippets.AMC.snippets)
    filterSnippetsArray();
    console.log("this is finalArray", finalArray);
  }, []);
  

  console.log("this is finalArray", finalArray);
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {finalArray.map((snippet) => (
          <GridListTile className={classes.GridListTile} key={snippet.tick}
          style={{height: 300, padding: '20px 20px 20px 20px', width: '300px',}}
          >
            <p>{snippet.title} </p> 
            <hr />
            <p>{snippet.text}</p>
            
            <GridListTileBar
              title={snippet.tick}
              subtitle={snippet.timestamp}
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

