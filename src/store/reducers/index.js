/**
 * Created by warapitiya on 2019-05-06.
 */

import { combineReducers } from 'redux';
import stockReducer from './stockReducer';

export default combineReducers({
  stock: stockReducer,
});
