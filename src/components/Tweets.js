import React from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import  WritePost from './WritePost';
import TweetsSection from './TweetsSection'

const Tweets = () => {
    return (
        <div className="parentTweets"  >
                  <WritePost className="post-container">
                  </WritePost>
                  <TweetsSection>
                  </TweetsSection>
        </div>
    )
}

export default Tweets;
