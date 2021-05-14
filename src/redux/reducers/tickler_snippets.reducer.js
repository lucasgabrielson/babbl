const ticker_snippets = (state = [], action) => {
    switch (action.type) {
        case 'SET_TICKER_SNIPPETS':
            return action.payload;

        default:
            return state;
    }
};

export default ticker_snippets;
