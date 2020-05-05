import React, {useReducer} from 'react';
import axios from 'axios';
import SearchTermContext from './SearchTermContext';
import SearchReducer from './SearchReducer';
import {
        SEARCH_TWEETS,
        GET_TWEETS,
        CLEAR_TWEETS,
        SET_LOADING,
        SET_ALERT,
        REMOVE_ALERT,
} from '../types';


const SearchState = props => {
    const initialState = {
        tweets:[],
        tweet:{},
        loading:false
    }

    const [state,dispatch] = useReducer(SearchReducer,initialState);

    // Search Tweets
    const searchTweets = async text => {
        setLoading();

        const res = await axios.get("https://xxeqim55zf.execute-api.us-east-1.amazonaws.com/dev/reviews/"+text);

        dispatch({
            type:SEARCH_TWEETS,
            payload:res.data.message
        })
    };

    // Set Loading
    const setLoading = () => dispatch({ type:SET_LOADING });

    return (
    <SearchTermContext.Provider
        value = {{
            tweets:state.tweets,
            tweet:state.tweet,
            loading:state.loading,
            searchTweets
        }}
    >    
    {props.children}
    </SearchTermContext.Provider>)
}

export default SearchState;