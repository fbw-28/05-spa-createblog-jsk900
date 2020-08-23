import React from 'react';
import Navigation from './Navigation';
import IndividualPost from './IndividualPost';

//The props we receive here contain our state array which contains all our posts
//Map around the postArray and call the IndividualPost component.
//We also have a condition render of this component checking for an empty array.
const ShowPosts = (props) => {
  return (
    <>
      <div className='height'>
        <h1 className='header-text'>Show Posts</h1>
        <Navigation />
      </div>
      <section className='post-list'>
        {props.postArray && props.postArray.length > 0 ? (
          props.postArray.map((post) => (
            <IndividualPost
              key={post.id}
              post={post}
              postDelete={props.postDelete}
            />
          ))
        ) : (
          <h1 className='no-posts'>No Posts to show</h1>
        )}
      </section>
    </>
  );
};

export default ShowPosts;
