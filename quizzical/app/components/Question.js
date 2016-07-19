/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'
import ChoiceList from './ChoiceList'

class Question extends Component {

    handleClick(event) {
        event.preventDefault();
        this.props.actions.submitVotes(this.props.question.id)
    }

    render() {
        return (
            <form action="">
                <div className="Questions-item">
                  <fieldset className="Question">
                      <legend className="Question-title">{this.props.question.question_text}</legend>
                      <ChoiceList question={this.props.question} actions={this.props.actions}/>
                  </fieldset>
                  <button className="Questions-submit" onClick={this.handleClick.bind(this)}>
                      Next Question
                  </button>
                </div>
             </form>
        )
    }
}

export default Question