import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import NavBar from './navbar/NavBar';

import '../node_modules/bootstrap/dist/css/bootstrap-flex.css';
import '../node_modules/react-select/dist/react-select.css';

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
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
