import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function TickerSelect() {
    const classes = useStyles();
    const tickers = useSelector( store => store.populated_tickers.meta.all_tickers)
    const [search, setSearch] = useState('');
    const history = useHistory();

    // const countries = [
    // { code: 'AD', label: 'Andorra', phone: '376' },

    // const tickers = []

    const handleChange = (value) => {
        history.push(`/company/${value}`, {params: value})
    }

    return (
        <Autocomplete
        id="ticker-select"
        style={{ width: 300 }}
        options={tickers}
        classes={{
            option: classes.option,
        }}
        autoHighlight
        onChange={(event, value) => handleChange(value)}
        getOptionLabel={(option) => option}
        renderOption={(option) => (
            <React.Fragment>
                {option}
            </React.Fragment>
        )}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a ticker"
            variant="outlined"
            inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            />
        )}
        />
    );
}