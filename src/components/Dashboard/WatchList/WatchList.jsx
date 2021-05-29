import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { FormControlLabel, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';


// const MatEdit = ({ index }) => {

//   const handleEditClick = () => {
//       console.log('delete clicked');
      
//   }


//   return <FormControlLabel
//              control={
//                  <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
//                      <DeleteIcon style={{ color: red[200] }} />
//                  </IconButton>
//              }
//          />
// };

export default function FlexLayoutGrid(props) {
  const dispatch = useDispatch();
  const populated_tickers = useSelector((store) => store.populated_tickers);
  

  // useEffect(() => {
  //   dispatch({type: 'FETCH_USER_WATCHLIST', payload: user.id});
  
  // }, [dispatch]);
  const user = useSelector(store => store.user);
  const userWatchlist = useSelector( store => store.userWatchlist);

  let one_ticker = populated_tickers.data[0].ticker;
  let one_mentions = populated_tickers.data[0].mentions;
  
  let two_ticker = populated_tickers.data[1].ticker;
  let two_mentions = populated_tickers.data[1].mentions;
  
  let three_ticker = populated_tickers.data[2].ticker;
  let three_mentions = populated_tickers.data[2].mentions;

  let four_ticker = populated_tickers.data[3].ticker;
  let four_mentions = populated_tickers.data[3].mentions;

  let five_ticker = populated_tickers.data[4].ticker;
  let five_mentions = populated_tickers.data[4].mentions;

  // let six_ticker = populated_tickers.data[8].ticker;
  // let six_mentions = populated_tickers.data[8].mentions;

  // let seven_ticker = populated_tickers.data[1].ticker;
  // let seven_mentions = populated_tickers.data[1].mentions;

  
 

  const [rows, setRows] = useState([
    { id: 1, Ticker: one_ticker, Mentions: one_mentions,  },
    { id: 2, Ticker: two_ticker, Mentions: two_mentions, },
    { id: 3, Ticker: three_ticker, Mentions: three_mentions, },
    { id: 4, Ticker: four_ticker, Mentions: four_mentions, },
    { id: 5, Ticker: five_ticker, Mentions: five_mentions, },
    // { id: 6, Ticker: six_ticker, Mentions: six_mentions, },
    // { id: 7, Ticker: seven_ticker, Mentions: seven_mentions, },
    // { id: 8, Ticker: eight_ticker, Mentions: eight_mentions, },
    // { id: 9, Ticker: nine_ticker, Mentions: nine_mentions, },
  ])
  
   
  
 

  const columns = [
    { field: 'ticker', headerName: 'Ticker',
      renderCell: (params) => {
        const onClick = () => {
          props.setSelectedTicker(params.row.ticker);
          console.log('clicked ticker', params.row.ticker)
      };
      return <div style={{ cursor: "pointer" }} variant="contained" size="small" onClick={onClick}>{params.row.ticker}</div>;
    }
    },
    { field: 'mentions', headerName: 'Mentions', width: 120},
    // { field: 'Price', headerName: 'Price'},
    {
      field: "actions",
      headerName: "Delete",
      sortable: false,
      width: 'fit-content',
      disableClickEventBubbling: true,
      disableSelectionOnClick: true,
      
      renderCell: (params) => {
        const onClick = () => {
          // props.setSelectedTicker(params.row.ticker);
          console.log('delete ticker:', params.row.ticker, params.row.id)
          let obj = {
            ticker: params.row.ticker,
            user_id: user.id,
          }
          dispatch({type: 'DELETE_WATCHLIST_ARTICLE', payload: obj });
      };
          return (
              <div  style={{ cursor: "pointer" }} disableSelectionOnClick={true} disableClickEventBubbling={true} >
                  <IconButton color="secondary" aria-label="delete button" onClick={onClick} >
                     <DeleteIcon style={{ color: red[200] }} />
                 </IconButton>
               </div>
          );
       }
    }
    
 
  ];

  


  
  

  return (
  
    <div style={{ height: '500px', width: '300px', }}>
      <div style={{ display: 'flex', flexDirection: 'column',  height: '100%'}}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={userWatchlist} columns={columns} pageSize={10} hideFooter={true}  />
          
        </div>
      </div>
    </div>
    
    
  

  );
}