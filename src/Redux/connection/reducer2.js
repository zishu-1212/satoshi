// myNftReducer.js

import { FETCH_NFTS_REQUEST, FETCH_NFTS_SUCCESS, FETCH_NFTS_FAILURE } from '../types';

const initialState = {
  nfts: [],
  loading: false,
  error: null,
};

const myNftReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NFTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        nfts: action.payload,
      };
    case FETCH_NFTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default myNftReducer;
