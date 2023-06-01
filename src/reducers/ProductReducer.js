import {
    FETCH_PRODUCT,
    FETCH_SINGLE_PRODUCT
  } from "../actions/type";

  const initialState = { 
    allProductList: null,
    singleProductList : null
    };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_PRODUCT:
        return {
          ...state,
          allProductList: payload.allProductList,
        };
      case FETCH_SINGLE_PRODUCT:
        return {
          ...state,
          singleProductList: payload.singleProductList,
        };
      default:
        return state;
    }
  }