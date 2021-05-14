import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  
function WatchList(){
    const classes = useStyles();
    const [stock, setStock] = React.useState('');

    const handleChange = (event) => {
        setStock(event.target.value);
      };

    return(
    <>
         <FormControl className={classes.formControl}>
        <InputLabel id="watchlist">WatchList</InputLabel>
        <Select
          labelId="watchlist"
          id="watchlist"
          onChange={handleChange}
          value={stock}
        >
          <MenuItem value ={0}>Tesla</MenuItem>
          <MenuItem value ={1}>GameStop</MenuItem>
          <MenuItem value ={2}>Amazon</MenuItem>
          <MenuItem value ={3}>AMC</MenuItem>
          <MenuItem value ={4}>GE</MenuItem>
          <MenuItem value ={5}>Microsoft</MenuItem>
          <MenuItem value ={6}>Nokia</MenuItem>
          <MenuItem value ={7}>Facebook</MenuItem>
          <MenuItem value ={8}>Netflix</MenuItem>
          <MenuItem value ={9}>Twitter</MenuItem>
          
        </Select>
      </FormControl>

    </>
    )
}

export default WatchList;