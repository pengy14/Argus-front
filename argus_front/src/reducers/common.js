const defaultState = {
    appName: 'Argus',
    redirectTo: null,
    inProgress: false,
    searchResults:[]
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
        case 'SETTINGS_SAVED':
        case 'ARTICLE_PUBLISHED':
        case 'ARTICLE_UPDATED':
            return {
                ...state,
                inProgress: false,
                redirectTo: '/'
            }
        case 'ASYNC_START':
            return {
                ...state,
                inProgress: true
            };
        case 'REDIRECT':
            return {
                ...state,
                redirectTo: null
            };
        case 'LOGOUT':
        case 'DELETE_ARTICLE':       
            return {
                ...state,
                redirectTo: '/'
            };
        case 'APP_LOADED':
        case 'PROFILE_UNLOAD':
        case 'HOME_PAGE_UNLOAD':
        case 'ARTICLE_PAGE_UNLOAD':
        case 'ARTICLE_PAGE_LOADED':
            return {
                ...state,
                inProgress: false
            };
        case 'SEARCH':
            console.log('search');
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
        }
}