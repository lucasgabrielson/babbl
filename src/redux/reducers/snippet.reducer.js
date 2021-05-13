const snippetReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SNIPPET':
            let snippet = [
                {
                    "Source": "CNN",
                    "Date": "5/3/21",
                    "Outlook": "Future-Outlook",
                    "Feeling": "Optimistic",
                    "Snippet": "By some estimates, the Covid-19 diagnostics blah blah blah blah 35% blah blah blah"
                }
            ]
            console.log('In snippet reducer payload = ', snippet);
            return snippet;
        default:
            return state;
    }
}


export default snippetReducer;