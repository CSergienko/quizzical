/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react';
import CategoryList from './CategoryList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.actions.getQuestionAsync();
    }

    render() {
        return (
        <div>
            <CategoryList/>
            {this.props.children}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
