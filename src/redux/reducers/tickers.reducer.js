const tickers = (state = [], action) => {
    switch (action.type) {
        case 'SET_TICKERS':
            return {
                current_price: action.payload[action.payload.length - 1].close
                percent_change: (action.payload[0].open - action.payload[action.payload.length - 1].close) / action.payload[0].opem * 100
                points_change: action.payload[0].open - action.payload[action.payload.length - 1].close
            };

        default:
            return state;
    }
};

export default tickers;
