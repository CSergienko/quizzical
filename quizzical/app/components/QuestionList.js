import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Question from './Question'

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.props.actions.getQuestionAsync(this.props.params.category);
    }

    componentDidMount() {
        this.props.actions.getQuestionAsync(this.props.params.category);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.params.category !== this.props.params.category) {
            this.props.actions.getQuestionAsync(this.props.params.category);
        }
    }

    componentWillUnmount() {
        this.props.actions.updateQuestions([]);
    }

    render() {
        return (
            <div>
                <h1>Questions</h1>
                <ul>
                    {
                        this.props.questions.map((question) => {
                            return (
                                <Question key={question.id} question={question} actions={this.props.actions}/>
                            )
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);