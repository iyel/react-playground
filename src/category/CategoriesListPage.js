import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './category.actions';
import CategoriesList from './components/CategoriesList';


function mapStateToProps(state) {
  return {
    categories: state.categories.data,
    locations: state.locations.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
