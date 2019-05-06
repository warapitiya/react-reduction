/**
 * Created by warapitiya on 2019-05-06.
 */

import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import stockPriceReducer from './stockPriceReducer';

export default combineReducers({
  stock: stockReducer,
  price: stockPriceReducer,
});
