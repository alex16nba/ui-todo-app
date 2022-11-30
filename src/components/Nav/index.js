import React from 'react';
import { Link } from 'react-router-dom';
import { Root } from './index.styled';

export default function Nav() {
  return (
    <Root>
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About us
      </Link>
      <Link to="/blog">
        Blog
      </Link>
    </Root>
  );
}
