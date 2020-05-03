import React, {useState,useEffect,useContext} from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import  WritePost from './WritePost';
import './TweetsSection.css';
import axios from 'axios';
import { SearchTermContext } from '../contexts/SearchTermContext';


const TweetsSection = () => {
    const {searchTerm} = useContext(SearchTermContext)
    const {isSearchTermClicked} = useContext(SearchTermContext);
    console.log(isSearchTermClicked);
    const initialState = [];
    const [loading, setLoading ] = useState(true);
    const [tweets, setTweets] = useState([]);
    const [error, setError] = useState('');
    let tweetsMapping;

    useEffect(() => {
        console.log(searchTerm);
        axios
            .get("https://xxeqim55zf.execute-api.us-east-1.amazonaws.com/dev/reviews/"+searchTerm.searchInput.searchInput)
            .then(res => {
                setTweets(res.data.message);
                setError('');
            })
            .catch(err => {
                setError('Something went wrong !!!');
                setTweets([]);
            })
    }, [isSearchTermClicked]);

    return (
        <Card className="tweets-section-parent">
                {
                    tweets.length > 0 && tweets.map(item => { 
                        return (
                            <div className="tweets-indiv" key={item.id}>
                                {item.twiview}
                            </div>
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
