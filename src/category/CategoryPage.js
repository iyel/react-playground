import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from './category.actions';
import Category from './components/Category'


function mapStateToProps(state) {
    return {
        categories: state.categories.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
