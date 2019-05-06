/**
 * Created by warapitiya on 2019-05-06.
 */

import axios from 'axios';
import { LOAD_STOCK_PRICE } from '../reducers/stockPriceReducer';

export function loadStockPrice(symbol, period) {
  return {
    payload: axios.get(` https://api.iextrading.com/1.0/stock/${symbol}/chart/${period}`)
      .then((response) => response.data),
    type: LOAD_STOCK_PRICE,
  };
}
