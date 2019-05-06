/**
 * Created by warapitiya on 2019-05-07.
 */

const initialState = {
  isLoaded: false,
  prices: [],
};

export const LOAD_STOCK_PRICE = '[PRICE] LOAD_STOCK_PRICE';
export const LOAD_STOCK_PRICE_FULFILLED = '[PRICE] LOAD_STOCK_PRICE_FULFILLED';

export default function stockPriceReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STOCK_PRICE_FULFILLED: {
      return {
        prices: [...action.payload],
      };
    }
    default:
      return state;
  }
}
