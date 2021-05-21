//use middleware to handle the network requests to send the login details to the server.

import {
  ADD_TODO_SUCCESS,
  IS_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  USER_MEMBER,
} from "../store/actions/actionTypes";

export const isAuthenticated = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const todoAdded = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};

export const userMemberAuth = (payload) => {
  return {
    type: USER_MEMBER,
    payload
  }
}
export const isLoading = () => {
  return {
    type: IS_LOADING,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
