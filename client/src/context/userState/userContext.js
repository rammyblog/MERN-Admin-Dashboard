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
      const res = await axios.get('/api/use/');
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

  const fetchSingleUser = useCallback(async (id) => {
    dispatch({
      type: types.USER_START
    });
    const tempState = { ...state };
    if (!tempState.users) {
      try {
        const res = await axios.get(`/api/user/${id}`);
        dispatch({
          type: types.GET_USER,
          payload: res.data.data
        });
      } catch (error) {
        dispatch({
          type: types.USER_FAILURE,
          payload: error.message
        });
        console.log(error.message, { error });
      }
    } else {
      const user = tempState.fliter((user) => user._id == id);
      dispatch({
        type: types.GET_USER,
        payload: user
      });
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        fetchSingleUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
