export default (state={}, action) => {
    switch(action.type) {
        case 'LOGIN':
        case 'REGISTER':
        case 'SETTINGS_SAVED':
            return {
                ...state,
                username: action.payload.user.username,
                id: action.payload.user.id,
                email: action.payload.user.email,
                image: action.payload.user.image,
                bio: action.payload.user.bio
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}
