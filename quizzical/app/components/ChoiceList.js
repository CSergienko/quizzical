import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Choice from './Choice'

class ChoiceList extends Component {

    render() {
        return (
            <ul className="Question-options">
                {
                    this.props.question.choice_set.map((choice) => {
                        return (
                            <Choice
                                key={choice.id}
                                choice={choice}
                                question={this.props.question}
                                actions={this.props.actions}
                            />
                        )
                    })
                }
             </ul>
        )
    }

}

function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceList);