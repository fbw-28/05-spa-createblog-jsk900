import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='link-active'>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/createPosts' activeClassName='link-active'>
            Create Post
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/showPosts' activeClassName='link-active'>
            Show Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
