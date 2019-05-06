/**
 * Created by warapitiya on 2019-05-06.
 */

import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = applyMiddleware(promise);

export default createStore(reducers, composeWithDevTools(middleware));
