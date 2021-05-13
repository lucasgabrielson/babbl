const userArticlesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ARTICLES':
            return action.payload;
        default:
            return state;
    }
}


export default userArticlesReducer;

