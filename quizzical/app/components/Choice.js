/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'

class Choice extends Component {

    handleChange(event) {
        this.props.actions.setUserChoice(this.props.choice.id, this.props.question.id);
    }

    render() {
        return (
            <li className="Question-option">
                <input
                    className="Question-input"
                    type="radio"
                    name="question"
                    id={'choice_' + this.props.choice.id}
                    value={this.props.choice.id}
                    onClick={this.handleChange.bind(this)}
                    checked={this.props.choice.id === this.props.question.userChoice}
                />
                <label
                    className="Question-label"
                    htmlFor={'choice_' + this.props.choice.id}>
                    <span className="Question-checkbox"></span>
                    {this.props.choice.choice_text}
                </label>
            </li>
        )
    }
}

export default Choice/**
 * Created by peterringelmann on 2016/07/14.
 */
