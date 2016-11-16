import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from './locations.actions';
import Location from './components/Location';


function mapStateToProps(state) {
  return {
    locations: state.locations.data,
    categories: state.categories.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Location));
