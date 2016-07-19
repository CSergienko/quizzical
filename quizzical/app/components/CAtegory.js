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
            <Link to={'/questions/' + this.props.category.slug + '/0/'} className="CategoryTile">
                <header className="CategoryTile-header">
                    <h1 className="CategoryTile-title">{this.props.category.category_text}</h1>
                </header>
                <img className="CategoryTile-image" src="http://www.placehold.it/1024x1024" alt=""/>
            </Link>
        )
    }
}

export default Category