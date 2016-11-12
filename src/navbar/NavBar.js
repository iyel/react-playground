import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../common/common.scss';

const Navbar = () => {
  const svg = (
    <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-books" viewBox="0 0 36 32">
          <title>books</title>
          <path
            className="path1"
            d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0
              1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"
          />
          <path
            className="path2"
            d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45
              1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"
          />
          <path
            className="path3"
            d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999
              17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852
              0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"
          />
          <path
            className="path4"
            d="M29 27c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"
          />
        </symbol>
        <symbol id="icon-location" viewBox="0 0 32 32">
          <title>location</title>
          <path
            className="path1"
            d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16
              16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
          />
        </symbol>
      </defs>
    </svg>
  );
  return (

    <div >
      {svg}
      <nav className="nav nav-inline">
        <Link to="/locations" className="nav-link" activeClassName='active'>
          <svg className="icon icon-location">
            <use xlinkHref="#icon-location"></use>
          </svg>{ ' ' }
          Locations
        </Link>
        { ' ' }
        <Link to="/" className="nav-link" activeClassName='active'>
          <svg className="icon icon-books">
            <use xlinkHref="#icon-books"></use>
          </svg>{ ' ' }
          Categories
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
