import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Home from './components/Home';
import CreatePosts from './components/CreatePosts';
import ShowPosts from './components/ShowPosts';
import ViewPost from './components/ViewPost';
import NotFound from './components/NotFound';

import './styles.css';

//Create state
class App extends Component {
  state = {
    userName: '',
    title: '',
    content: '',
    postArray: [],
  };

  tempArray = [];

  //OnChange event Listener for all input fields
  createPost = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  //Submit the inputs.. We save off whatever posts we have in the state postArray into tempArray
  //We then create an object with an id a date and the input fields. We push this object to our tempArray.
  //Use setState to update our state postArray with this tempArray.
  //When all has been updated we clean up.
  submitPost = (e) => {
    e.preventDefault();
    const { userName, title, content } = this.state;

    this.tempArray = [...this.state.postArray];
    let post = {
      id: uuid(),
      date: new Date(Date.now()).toLocaleString(),
      userName,
      title,
      content,
    };
    this.tempArray.push(post);
    this.setState({
      postArray: this.tempArray,
    });
    this.tempArray = [];
    post = {};
    this.setState({ userName: '', title: '', content: '' });
  };

  //Delete a post
  postDelete = (id) => {
    const postList = [...this.state.postArray];
    const temp = postList.filter((post) => post.id !== id);
    this.setState({ postArray: temp });
  };

  render() {
    return (
      //Create our Routes passing props and state where needed
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/createPosts'
              render={(props) => (
                <CreatePosts
                  {...props}
                  state={this.state}
                  createPost={this.createPost}
                  submitPost={this.submitPost}
                />
              )}
            />
            <Route
              path='/showPosts'
              render={(props) => (
                <ShowPosts
                  {...props}
                  postArray={this.state.postArray}
                  postDelete={this.postDelete}
                />
              )}
            />
            <Route
              path='/viewPost'
              render={(props) => <ViewPost {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
