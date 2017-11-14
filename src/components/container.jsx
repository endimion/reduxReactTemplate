//This will be inside src/components

import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchUser } from '../actions/userActions'
import {fetchTweets } from '../actions/tweetActions'

@connect( (store)=>{
  return { user: store.user.user,
            tweets: store.tweets.tweets};
})
export default class Container extends React.Component {

    componentWillMount(){
      this.props.dispatch(fetchUser());
    }

    fetchTweets(){
      this.props.dispatch(fetchTweets())  ;
    }

    render(){
      const  {user,tweets} = this.props;
      console.log(user );
      console.log(tweets );
      const tweetsList = tweets.map( (tweet) =>{
          return <li>{tweet.id} : {tweet.text}</li>;
      });
      return <div>
                <h1>Hello World from {user.name}!</h1>
                <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
                <ul>
                    {tweetsList}
                </ul>
                </div>;
      // return null;
    }

}
