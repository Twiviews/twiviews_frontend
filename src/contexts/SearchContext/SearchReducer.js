import {
    SEARCH_TWEETS,
    GET_TWEETS,
    CLEAR_TWEETS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT,
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_TWEETS:
            return {
                ...state,
                tweets: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
            ...state,
            loading:true
        }
        default:
            return state;

    }
}