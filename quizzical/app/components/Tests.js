import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Question from './Question'

class Tests extends Component {

    render() {
        return (
            <div>
                <h1>Questions</h1>
                <ul>
                    {
                        this.props.questions.map((question) => {
                            return <Question key={question.id} question={question} actions={this.props.actions}/>
                        })
                    }
                 </ul>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tests);