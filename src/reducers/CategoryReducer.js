import {
    FETCH_CATEGORY
  } from "../actions/type";

  const initialState = { 
    allCategoryList: null,
    };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_CATEGORY:
        return {
          ...state,
          allCategoryList: payload.allCategoryList,
        };
      default:
        return state;
    }
  }