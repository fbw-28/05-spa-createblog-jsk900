import React from 'react';
import Navigation from './Navigation';

//A simple functional component receiving props and displaying them.
const ViewPost = (props) => {
  const { date, userName, title, content } = props.location.state;
  return (
    <>
      <div className='height'>
        <h1 className='header-text'>View Post</h1>
        <Navigation />
      </div>
      <section className='view-post'>
        <p>
          {' '}
          <span>{` ${userName}`}</span> wrote on <span>{`${date}`}</span>
        </p>
        <p>
          <span>{title}</span>
        </p>
        <p>{content}</p>
      </section>
    </>
  );
};

export default ViewPost;
