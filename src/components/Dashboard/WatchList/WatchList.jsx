import React, {useState, useEffect} from "react";
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
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

export default function FlexLayoutGrid() {
 

  const columns = [
    { field: 'Ticker', headerName: 'Ticker'},
    { field: 'Bull', headerName: 'Bull'},
    { field: 'Bear', headerName: 'Bear'},
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

  


  
  const rows = [
    { id: 1, Ticker: 'TESLA', Bull: '+0.45', Bear: '-0.55'},
    { id: 2, Ticker: 'APPL', Bull: '+0.45', Bear: '-0.55' },
    { id: 3, Ticker: 'DIS', Bull: '+0.45', Bear: '-0.55' },
    { id: 4, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 5, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 6, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 7, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 8, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 9, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
    { id: 10, Ticker: 'LYFT', Bull: '+0.45', Bear: '-0.55' },
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