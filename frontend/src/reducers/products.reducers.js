import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants";

export const productListReducer = (state = {loading: null, products: [], error: null}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      state = {
        loading: true,
        products: []
      };
      break;
    case PRODUCT_LIST_SUCCESS:
      state = {
        loading: false,
        products: action.payload
      };
      break;
    case PRODUCT_LIST_FAIL:
      state = {
        loading: false,
        error: action.payload
      };
      break;
    default:
      state = {
        loading: null,
        products: []
      }
  }
  return state;
};
