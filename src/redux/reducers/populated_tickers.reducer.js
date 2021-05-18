const populated_tickers = (state = [], action) => {
    switch (action.type) {
        case 'SET_POPULATED_TICKERS':
            // return action.payload.data.sort((a, b) => (a.mentions - b.mentions))
            return action.payload

        default:
            return state;
    }
};

export default populated_tickers;