const babbl_api_sorted_articles = (state = [], action) => {
  switch (action.type) {
      case 'SET_API_SORTED_ARTICLES':
          return action.payload;

      default:
          return state;
  }
};

export default babbl_api_sorted_articles;