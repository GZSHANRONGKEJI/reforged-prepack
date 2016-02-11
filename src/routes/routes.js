'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Default from './Default.js';
import Counter from './Counter.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ Default } />
                <Route path="/" component={ Default } />
                <Route path="/counter" component={ Counter } />
            </Route>
        </Router>
        );
}