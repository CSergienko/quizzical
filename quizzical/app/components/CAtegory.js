/**
 * Created by peterringelmann on 2016/07/13.
 */
/**
 * Created by peterringelmann on 2016/07/12.
 */
import React, { Component } from 'react'
import { Link } from 'react-router';

class Category extends Component {

    render() {
        return (
          <li>
              <Link to={'/questions/' + this.props.category.slug + '/'}>{this.props.category.category_text}</Link>
          </li>
        )
    }
}

export default Category