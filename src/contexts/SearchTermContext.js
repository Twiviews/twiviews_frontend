import React,{createContext,useState} from 'react'

export const SearchTermContext = createContext();

const SearchTermContextProvider = (props) => {
    const intialState = {searchInput : ''}
    const [searchTerm , setSearchTerm] = useState(intialState);
    const [isSearchTermClicked , setSearchTermClicked] = useState(false);

    const addSearch = (title) => {
        setSearchTerm({searchInput:title});
    }

    const addSearchTermClicked = (value) => {
        setSearchTermClicked(value);
    }
    return (
        <SearchTermContext.Provider value ={{searchTerm,addSearch,addSearchTermClicked,isSearchTermClicked}}>
            {props.children}
        </SearchTermContext.Provider>    
    )
}

// TBD :- Code Clean Up and Optimization
// TBD :- useReducers react hook
// TBD :- Authentication and Route Protection


export default SearchTermContextProvider;
