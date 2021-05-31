//use middleware to handle the network requests to send the login details to the server.

import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  IS_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  TODO_LIST,
  USER_MEMBER,
  REGISTER_USER_SUCCESS,
} from "../store/actions/actionTypes";

export const isAuthenticated = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const isRegistered = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};
export const todoAdded = (todos) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todos,
  };
};

export const todoList = (todo) => {
  return {
    type: TODO_LIST,
    payload: todo
  };
};

export const todoDelete = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id,
  }
}

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
