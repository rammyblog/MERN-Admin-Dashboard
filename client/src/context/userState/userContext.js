import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback
} from 'react';
import userReducer from './userReducer';
import axios from 'axios';
import * as types from './userActionTypes';

const initialUserState = {
  loading: false,
  error: false,
  users: '',
  errResponse: ''
};

export const UserContext = createContext(initialUserState);

export const UserProvider = ({ children }) => {
  //   const BASE_AUTH_URL = process.env.API_BASE_URL + "api/"
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const fetchUsers = useCallback(async () => {
    dispatch({
      type: types.USER_START
    });
    try {
      const res = await axios.get('/api/user/');
      dispatch({
        type: types.USER_SUCCESS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAILURE,
        payload: error.message
      });
      console.log(error.message, { error });
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
