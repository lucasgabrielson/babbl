const top_movers = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOP_MOVERS':
            return action.payload

        default:
            return state;
    }
};

export default top_movers;
