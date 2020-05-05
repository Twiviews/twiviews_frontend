import React,{useState,useContext} from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './SearchMenu.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SearchTermContext } from '../contexts/SearchTermContext';


const SearchMenu = () => {
    const initialState = {
       searchInput:''   
    }
    const  { addSearch } = useContext(SearchTermContext);
    const { addSearchTermClicked } = useContext(SearchTermContext);
    const  [searchTerm, setSearchTerm] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addSearch(searchTerm);
        addSearchTermClicked(true);
        setSearchTerm({searchInput:''});
    }
    return (
        <Card   className = "search-menu-container" >
                <form onSubmit = {handleSubmit}>
                <h4 className = "search-header">Search for a movie name</h4>
                <Input className = "search-field" 
                type="text" 
                value = {searchTerm.searchInput}
                onChange = {e => setSearchTerm({ ...searchTerm, searchInput:e.target.value })}
                />
                <Input className="search-button" value="Search" type="submit"/> 
                </form>
        </Card>
    )
}

export default SearchMenu

// TBD :- Code Clean Up and Optimization
// TBD :- useReducers react hook
// TBD :- Authentication and Route Protectionotection