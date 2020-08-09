import * as types from './authActionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        error: false,
        loading: true
      };

    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload
      };

    case types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload
      };
    case types.AUTH_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        token: null,
        user: null
      };

    default:
      return state;
  }
};
