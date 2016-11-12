import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as actions from './locations.actions';
import LocationsList from './components/LocationsList'


function mapStateToProps(state) {
    return {
        categories: state.categories.data,
        locations: state.locations.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
