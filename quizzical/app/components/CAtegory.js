/**
 * Created by peterringelmann on 2016/07/13.
 */
/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'

class Category extends Component {

    handleComplete() {
        this.props.actions.completeTestAsync(this.props.category.id)
    }

    render() {
        return (
          <li>
            <div>{this.props.category.category_text}</div>
          </li>
        )
    }
}

export default Category