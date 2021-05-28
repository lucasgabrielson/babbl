import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { FormControlLabel, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';


const MatEdit = ({ index }) => {

  const handleEditClick = () => {
      console.log('delete clicked');
  }


  return <FormControlLabel
             control={
                 <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                     <DeleteIcon style={{ color: red[200] }} />
                 </IconButton>
             }
         />
};

export default function FlexLayoutGrid(props) {

  const populated_tickers = useSelector((store) => store.populated_tickers);
  let one_x = Number(populated_tickers.data[9].x_graph.toFixed(2));
  let one_y = Number(populated_tickers.data[9].y_graph.toFixed(2));
  let one_mentions = populated_tickers.data[9].mentions;
  let one_score = Number(one_x + one_y).toFixed(2);

  let two_x = Number(populated_tickers.data[0].x_graph.toFixed(2));
  let two_y = Number(populated_tickers.data[0].y_graph.toFixed(2));
  let two_mentions = populated_tickers.data[0].mentions;
  let two_score = Number(two_x + two_y).toFixed(2);

  let three_x = Number(populated_tickers.data[2].x_graph.toFixed(2));
  let three_y = Number(populated_tickers.data[2].y_graph.toFixed(2));
  let three_mentions = populated_tickers.data[2].mentions;
  let three_score = Number(three_x + three_y).toFixed(2);

  let four_x = Number(populated_tickers.data[1].x_graph.toFixed(2));
  let four_y = Number(populated_tickers.data[1].y_graph.toFixed(2));
  let four_mentions = populated_tickers.data[1].mentions;
  let four_score = Number(four_x + four_y).toFixed(2);

  const rows = [
    { id: 1, Ticker: 'AMC', Mentions: one_mentions, Babbl_Score: one_score },
    { id: 2, Ticker: 'AAPL', Mentions: two_mentions, Babbl_Score: two_score },
    { id: 3, Ticker: 'AMD', Mentions: three_mentions, Babbl_Score: three_score },
    { id: 4, Ticker: 'TSLA', Mentions: four_mentions, Babbl_Score: four_score },
   
  ];
 

  const columns = [
    { field: 'Ticker', headerName: 'Ticker',
      renderCell: (params) => {
        const onClick = () => {
          props.setSelectedTicker(params.row.Ticker);
          console.log('clicked ticker', params.row.Ticker)
      };
      return <div style={{ cursor: "pointer" }} variant="contained" size="small" onClick={onClick}>{params.row.Ticker}</div>;
    }
    },
    { field: 'Mentions', headerName: 'Mentions', width: 120},
    { field: 'Babbl_Score', headerName: 'Babbl Score'},
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 'fit-content',
      disableClickEventBubbling: true,
      disableSelectionOnClick: true,
      
      renderCell: (params) => {
          return (
              <div  style={{ cursor: "pointer" }} disableSelectionOnClick={true} disableClickEventBubbling={true} >
                  <MatEdit index={params.row.id} />
               </div>
          );
       }
    }
    
 
  ];

  


  
  

  return (
  
    <div style={{ height: '503px', width: '400px', }}>
      <div style={{ display: 'flex', flexDirection: 'column',  height: '100%'}}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} hideFooter={true}  />
          
        </div>
      </div>
    </div>
    
    
  

  );
}