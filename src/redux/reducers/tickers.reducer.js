const tickers = (state = [], action) => {
    switch (action.type) {
        case 'SET_TICKERS':
            return action.payload;

        default:
            return state;
    }
};

export default tickers;
