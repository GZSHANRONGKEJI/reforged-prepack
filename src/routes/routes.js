'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import PageSet1 from './PageSet1.js';
import PageSet2 from './PageSet2.js';
import PageProgress from './PageProgress.js';
import TabsPage from './TabsPage.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ PageSet1 } />
                <Route path="/set1" component={ PageSet1 } />
                <Route path="/set2" component={ PageSet2 } />
                <Route path="/progress" component={ PageProgress } />
                <Route path="/tabs" component={ TabsPage } />
            </Route>
        </Router>
        );
}