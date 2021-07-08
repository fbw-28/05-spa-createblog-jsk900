import React from 'react';
import { Link } from 'react-router-dom';

//We receive two things here. The individual post which we deconstruct.
//Also the postDelete method from the main App component.
//The data is then displayed. Two icons are also displayed.
//One to view, which is a Link tag that calls a component on a Route.
//The other is a normal button that calls our postDelete method on the main App component.
const IndividualPost = ({ post, postDelete }) => {
  const { id, date, userName, title, content } = post;

  return (
    <div>
      <aside>
        <p>
          <span>{` ${userName}`}</span> wrote on <span>{`${date}`}</span>
        </p>
        <Link
          className='link-icon'
          to={{
            pathname: `/ViewPost`,
            state: {
              date: date,
              userName: userName,
              title: title,
              content: content,
            },
          }}>
          <i className='far fa-eye' style={{ fontSize: '15px' }}></i>
        </Link>
        <button className='icon' onClick={() => postDelete(id)}>
          <i className='far fa-trash-alt'></i>
        </button>
      </aside>
    </div>
  );
};

export default IndividualPost;
