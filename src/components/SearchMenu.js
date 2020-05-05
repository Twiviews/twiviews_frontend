import React,{useState,useContext} from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './SearchMenu.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SearchTermContext } from '../contexts/SearchContext/SearchTermContext';


const SearchMenu = () => {
    const SearchContext = useContext(SearchTermContext);
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            console.log("Please enter something");
        } else {
            SearchContext.searchTweets(text);
            setText('');
        }
  
    }
    return (
        <Card   className = "search-menu-container" >
                <form onSubmit = {handleSubmit}>
                <h4 className = "search-header">Search for a movie name</h4>
                <Input className = "search-field" 
                type="text" 
                onChange = {e => setText(e.target.value)}
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