import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Category from './Category'

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.props.actions.getCategoryAsync();
    }

    render() {
        return (
            <section className="Categories">
                {
                    this.props.categories.map((category) => {
                        return (
                            <article className="Categories-item">
                                <Category key={category.id} category={category} actions={this.props.actions}/>
                            </article>
                        )
                    })
                }
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);/**
 * Created by peterringelmann on 2016/07/13.
 */
