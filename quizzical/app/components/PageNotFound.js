
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class PageNotFound extends Component {

    render() {
        return (
          <div>
            <h1>Page Not Found!</h1>
          </div>
        )
    }

}

export default PageNotFound/**
 * Created by peterringelmann on 2016/07/12.
 */
