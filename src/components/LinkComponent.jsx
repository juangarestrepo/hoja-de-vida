import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ text, path }) => (
  <Link to={path}>
    <span className='text-blue-500 hover:text-blue-700'>{text}</span>
  </Link>
);

export { LinkComponent };
