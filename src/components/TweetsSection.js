import React, {useState,useEffect,useContext} from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import  WritePost from './WritePost';
import './TweetsSection.css';
import axios from 'axios';
import { SearchTermContext } from '../contexts/SearchContext/SearchTermContext';


const TweetsSection = () => {
    const SearchContext = useContext(SearchTermContext);
    const {loading, tweets} = SearchContext;


    return (
        <Card className="tweets-section-parent" data-simplebar-auto-hide>
                {
                    tweets.length > 0 && tweets.map(item => { 
                        return (
                            <Card className="tweets-card"  key={item.id}>
                                {item.twiview}
                            </Card>
                        )
                    })
                }
        </Card>
     )
}



export default TweetsSection;

// TBD :- Code Clean Up and Optimization
// TBD :- useReducers react hook
// TBD :- Authentication and Route Protection
