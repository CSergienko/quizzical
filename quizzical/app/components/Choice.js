/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'

class Question extends Component {
    
    render() {
        return (
            <li>
                <div>{this.props.choice.choice_text}</div>
            </li>
        )
    }
}

export default Question/**
 * Created by peterringelmann on 2016/07/14.
 */
