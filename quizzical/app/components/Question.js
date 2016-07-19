/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'

class Question extends Component {

    handleComplete() {
        this.props.actions.completeTestAsync(this.props.question.id)
    }

    render() {
        return (
          <div>
              <fieldset className="Question">
                  <legend className="Question-title">{this.props.question.question_text}</legend>
                  <ul className="Question-options">
                      <li className="Question-option">
                          <input className="Question-input" type="radio" name="question" id="question1" value="1" />
                          <label className="Question-label" for="question1">
                              <span className="Question-checkbox"></span>
                              420
                          </label>
                      </li>
                      <li className="Question-option">
                          <input className="Question-input" type="radio" name="question" id="question2" value="2" />
                          <label className="Question-label" for="question2">
                              <span className="Question-checkbox"></span>
                              17
                          </label>
                      </li>
                      <li className="Question-option">
                          <input className="Question-input" type="radio" name="question" id="question3" value="3" />
                          <label className="Question-label" for="question3">
                              <span className="Question-checkbox"></span>
                              3.14159265359
                          </label>
                      </li>
                  </ul>
                  <ChoiceList question={this.props.question} actions={this.props.actions}/>
              </fieldset>
              <button type="submit" className="Questions-submit">
                  Next Question
              </button>
          </div>
        )
    }
}

export default Question