import React, { Component, createRef } from 'react';
import Navigation from './Navigation';

//We use a class component here as we need to use a life cycle method
class CreatePosts extends Component {
  //Create a field reference so we can access the DOM
  inputRef = createRef();

  //On Component mounted and only once set the focus on the first input field
  componentDidMount() {
    this.inputRef.current.focus();
  }

  //Here we render the input fields. An onChange event on each field calls the method createPosts
  //This method is called from our main App component and updates the relevant properties in our state.
  //When the create post button is pressed we activate the onSubmit event which call the submitPost
  //method from our main App component. This creates an object containing our input fields, date and time
  //and also assigns a unique ID using the uuid library. We then push this object onto our state array.
  render() {
    return (
      <div className='height'>
        <h1 className='header-text'>Create Posts</h1>
        <Navigation />
        <form onSubmit={this.props.submitPost} className='form-section'>
          <input
            ref={this.inputRef}
            type='text'
            name='userName'
            value={this.props.state.userName}
            placeholder='Please enter your username'
            onChange={(e) => this.props.createPost(e)}
          />
          <input
            type='text'
            name='title'
            value={this.props.state.title}
            placeholder='Please enter your title'
            onChange={(e) => this.props.createPost(e)}
          />
          <textarea
            type='text'
            name='content'
            value={this.props.state.content}
            rows='10'
            cols='50'
            placeholder='Please enter your content'
            onChange={(e) => this.props.createPost(e)}
          />
          <button type='submit' className='post-button'>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePosts;
