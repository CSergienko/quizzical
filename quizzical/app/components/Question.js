/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'
import ChoiceList from './ChoiceList'

class Question extends Component {
    
    render() {
        return (
            <li>
                <div>{this.props.question.question_text}</div>
                <ChoiceList question={this.props.question} actions={this.props.actions}/>
            </li>
        )
    }
}

export default Question