import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback
} from 'react';
import userReducer from './userReducer';
import axios from 'axios';
import * as types from './userActionTypes';
import mernDashApi from '../../helpers/apiUtils';

const initialUserState = {
  loading: false,
  error: false,
  users: '',
  user: null,
  usersByMonth: null,
  errResponse: '',
  message: null
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
      const res = await mernDashApi.get('/api/user/');
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

  const addUser = useCallback(async (data) => {
    dispatch({
      type: types.USER_START
    });
    try {
      const res = await mernDashApi.post('/api/user/register', data);
      dispatch({
        type: types.USER_ADD,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const fetchUsersByMonth = useCallback(async () => {
    dispatch({
      type: types.USER_START
    });
    try {
      const res = await mernDashApi.get('/api/user/group/group-by-month');
      dispatch({
        type: types.GET_USERS_BY_MONTH,
        payload: res.data
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
        const res = await mernDashApi.get(`/api/user/single/${id}`);
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

  const editUserAction = useCallback(async (data) => {
    dispatch({
      type: types.USER_START
    });
    try {
      const res = await mernDashApi.patch('/api/user/edit-user', data);
      dispatch({
        type: types.USER_EDIT,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const changeUserPasswordAction = useCallback(async (data) => {
    dispatch({
      type: types.USER_START
    });
    try {
      await mernDashApi.post('/api/user/change-password', data);
      dispatch({
        type: types.USER_PASSWORD_CHANGE
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAILURE,
        payload: error.response.data.error_msg
      });
    }
    fetchSingleUser(data._id);
  }, []);

  useEffect(() => {
    fetchUsers();
    fetchUsersByMonth();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        fetchSingleUser,
        fetchUsersByMonth,
        editUserAction,
        changeUserPasswordAction,
        addUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
