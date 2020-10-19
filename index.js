/*
@ The main index file with App component which holds all the Posts
*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import store from './store/configureStore';
import './style.css';
import { fetchPosts } from './actions/postsActions';
import PostForm from './components/PostForm';

class App extends Component {
  //call the service fetchPosts once the component is mounted
  componentDidMount(){
   this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
  //check if new posts has been added and push it at the initial of the array
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  };
  render() {
    const postItems = this.props.posts.map(post => (
      <div className= "row" key={post.id}>
        <div className="col-xs-12"><h3>{post.title}</h3></div>
        <div className="col-xs-12"><p>{post.body}</p></div>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        <PostForm />
        <br/>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts.items,
    newPost: state.posts.item
  }
}
const AppContainer = connect(mapStateToProps, { fetchPosts })(App);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
