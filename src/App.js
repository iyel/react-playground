import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar/NavBar';

import '../node_modules/bootstrap/dist/css/bootstrap-flex.css';
import '../node_modules/react-select/dist/react-select.css';

/* eslint-disable react/prefer-stateless-function */
class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    isStorageLoaded: PropTypes.bool,
  }

  render() {
    return (
      <div className="container">
        <h1>My Locations</h1>
        <br />
        {this.props.isStorageLoaded
          ? this.props.children
          : <p>Loading...</p>
        }
        <NavBar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isStorageLoaded: state.storage.isStorageLoaded,
  };
}

export default connect(mapStateToProps)(App);
