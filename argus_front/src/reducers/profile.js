export default (state={}, action) => {
    switch(action.type) {
        case 'PROFILE_LOADED':
            return {
                ...state,
                username: action.payload.profile.username,
                email: action.payload.profile.email,
                image: action.payload.profile.image,
                bio: action.payload.profile.bio,
                follow: action.payload.profile.follow
            };
        case 'PROFILE_UNLOAD':
            return {};
        default:
            return state;
    }
}