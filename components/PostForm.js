/*
@ This is the Post From component which is used to add posts.
@ The FormComponent is a common functional component.
*/

import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postsActions';
import FormComponent from './common/FormComponent';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: ''
        }

        // Bind this to handlers
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
      //set state with dynamic key and value from input
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
      // prevent default
        e.preventDefault();
        const post ={
            title: this.state.title,
            body: this.state.body
        }
    this.props.createPost(post);
        
    }

  render() {
    return (
      <div>
      <h3>Add post</h3>
          <FormComponent onChange={this.onChange} onSubmit={this.onSubmit} title={this.state.title} body={this.state.body}/>
      </div>
    )
  }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm);