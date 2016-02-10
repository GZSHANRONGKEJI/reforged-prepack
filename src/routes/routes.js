'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Default from './Default.js';

export default function() {

    return (
        <Router history={ browserHistory }>
            <Route path="/" component="div">
                <IndexRoute component={ Default } />
                <Route path="/" component={ Default } />
            </Route>
        </Router>
        );
}
