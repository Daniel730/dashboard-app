import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, NavContainer } from '../global';

export default function Navbar() {
  return (
    <NavContainer>
      <Menu>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/createpost">
          <li>Create Post</li>
        </Link>
      </Menu>
    </NavContainer>
  );
}
