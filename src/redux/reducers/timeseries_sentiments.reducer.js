const timeseries_sentiments = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIMESERIES_SENTIMENTS':
            return action.payload;

        default:
            return state;
    }
};

export default timeseries_sentiments;

