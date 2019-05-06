/**
 * Created by warapitiya on 2019-05-06.
 */

import axios from 'axios';
import { LOAD_STOCK, LOAD_STOCK_METADATA } from '../reducers/stockReducer';

export function loadStock(inputQuote) {
  return {
    payload: axios.get(`https://api.iextrading.com/1.0/stock/${inputQuote}/peers`)
      .then((response) => response.data),
    type: LOAD_STOCK,
  };
}

export function loadStockMetadata(symbol) {
  return {
    payload: axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
      .then((response) => response.data),
    type: LOAD_STOCK_METADATA,
  };
}
