/** @module quizzical */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, useRouterHistory, browserHistory } from 'react-router';
import { createHistory, useBasename } from 'history';
import App from './components/App';
import Tests from './components/Tests';
import PageNotFound from './components/PageNotFound';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

let initialState = {
    questions: [{
        id: 0,
        completed: false,
        text: 'Test DSL connection'
    }]
}

let store = configureStore(initialState);

// Ridiculously complex method just to set a base url. (API subject to change)
// const browserHistory = useRouterHistory(useBasename(createHistory))({
//     //basename: '/troubleshooter'
// });

function add1(x){
    return x + 1;
}

function add2(x){
    x = x + 3;
    return x + 2;
}

const history = syncHistoryWithStore(browserHistory, store)

const routes =
<Route path='/' component={App}>
    <Route path="tests" component={Tests} />
    <Route path="*" component={PageNotFound} />
</Route>;


render(
  <Provider store={store}>
    <Router history={history}>
        {routes}
    </Router>
  </Provider>,
  document.getElementById('quizzical-app')
);