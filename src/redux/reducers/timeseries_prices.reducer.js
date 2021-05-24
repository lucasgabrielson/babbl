const timeseries_prices = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIMESERIES_PRICES':
            return action.payload;

        default:
            return state;
    }
};

export default timeseries_prices;
