import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Question from './Question'

class QuestionList extends Component {

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
            <section className="Questions">
                {
                    this.props.questions.map((question, index) => {
                        if (parseInt(this.props.params.id) === index) {
                            return (
                                <Question key={index} question={question} actions={this.props.actions}/>
                            )
                        }
                    })
                }
            </section>
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