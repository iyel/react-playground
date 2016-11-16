import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const Toolbar = ({ itemIds = [], type, removeItem }) => (
  <nav className="nav nav-inline">
    <Link
      to={`/${type}/${itemIds[0]}/view`}
      className={classNames('nav-link', { disabled: itemIds.length !== 1 })}
    >View</Link>
    <Link
      to={`/${type}/add`}
      className={classNames('nav-link')}
    >Add</Link>
    <Link
      to={`/${type}/${itemIds[0]}/edit`}
      className={classNames('nav-link', { disabled: itemIds.length !== 1 })}
    >Edit</Link>
    <a
      href="#removeItems"
      role="button"
      className={classNames('nav-link', { disabled: itemIds.length < 1 })}
      onClick={() => removeItem()}
    >Remove</a>
  </nav>
);

Toolbar.propTypes = {
  type: PropTypes.string.isRequired,
  itemIds: PropTypes.arrayOf(PropTypes.string),
  removeItem: PropTypes.func.isRequired,
};

export default Toolbar;
