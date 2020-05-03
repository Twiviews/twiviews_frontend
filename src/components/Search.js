import React from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import SearchMenu from './SearchMenu'
import SearchLinks from './SearchLinks'


const Search = () => {
    return (
            <div className="parentSearch" data-simplebar-auto-hide>
                <SearchMenu>
                </SearchMenu>
                <SearchLinks>
                </SearchLinks>    
            </div>            
    )
}

export default Search;


