import {
  GET_USERS_STARTED,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
} from "../actions/UserActions";

const defaultState = {
  loading: false,
  error: "",
  users: [],
};

const users = (state = defaultState, action) => {
  let newState;

  switch (action.type) {
    case GET_USERS_STARTED: {
      newState = {
        ...state,
        loading: true,
        error: "",
      };
      return newState;
    }
    case GET_USERS_SUCCEEDED:
      newState = {
        ...state,
        loading: false,
        users: action.response.data.data,
      };
      return newState;
    case GET_USERS_FAILED:
      newState = {
        ...state,
        loading: false,
        error: action.error.message,
      };
      return newState;
    default:
      return state;
  }
};

export default users;
