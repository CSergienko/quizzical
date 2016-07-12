/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'

class Question extends Component {

    handleComplete() {
        this.props.actions.completeTestAsync(this.props.question.id)
    }

    handleDelete() {
        this.props.actions.deleteTest(this.props.question.id)
    }

    render() {
        return (
          <li>
            <div>{this.props.question.text}</div>
            <button
                onClick={this.handleComplete.bind(this)}>Run test</button>
          </li>
        )
    }

}

export default Question