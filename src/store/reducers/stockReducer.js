/**
 * Created by warapitiya on 2019-05-06.
 */

const initialState = {
  isLoaded: false,
  stocks: [],
};

export const LOAD_STOCK = '[STOCK] LOAD_STOCK';
export const LOAD_STOCK_FULFILLED = '[STOCK] LOAD_STOCK_FULFILLED';

export const LOAD_STOCK_METADATA = '[STOCK] LOAD_STOCK_METADATA';
export const LOAD_STOCK_METADATA_FULFILLED = '[STOCK] LOAD_STOCK_METADATA_FULFILLED';

export default function stockReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STOCK_FULFILLED: {
      return {
        stocks: action.payload.map((symbol) => ({ symbol, isLoaded: false })),
      };
    }
    case LOAD_STOCK_METADATA_FULFILLED: {
      const stocks = state.stocks.map((stock) => {
        if (stock.symbol === action.payload.symbol) {
          return {
            ...stock,
            ...action.payload,
            isLoaded: true,
          };
        } else {
          return stock;
        }
      });
      return {
        stocks,
      };
    }
  }
  return state;
}
