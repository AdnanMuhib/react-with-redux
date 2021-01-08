import {
  GET_USERS_STARTED,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
} from "../actions/UserActions";

const defaultState = {
  loading: false,
  users: [],
};

const users = (state = defaultState, action) => {
  let newState;

  switch (action.type) {
      case GET_USERS_STARTED: {
          console.log("Users Started, Reducer");
      newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case GET_USERS_SUCCEEDED:
      newState = {
        ...state,
        loading: false,
        users: action.response.data,
      };
      return newState;
    case GET_USERS_FAILED:
      newState = {
        ...state,
        loading: false,
      };
      return newState;
    default:
      return state;
  }
};

export default users;
