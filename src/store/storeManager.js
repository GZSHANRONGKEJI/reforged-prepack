import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import myMiddleware from '../middleware/middleware.js';
import initialState from './initialState.js';
import {Subject} from 'rx';


const createStoreWithMiddleware = applyMiddleware(
    myMiddleware
)(createStore);

export default function initStore() {

    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
