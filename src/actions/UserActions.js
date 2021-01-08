export const GET_USERS_STARTED = "GET_USERS_STARTED";
export const GET_USERS_SUCCEEDED = "GET_USERS_SUCCCEEDED";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

const onGetUsersStarted = () => ({
  type: GET_USERS_STARTED,
});

const onGetUsersSucceeded = (response) => ({
  type: GET_USERS_SUCCEEDED,
  response,
});

const onGetUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  error,
});

export const getUsers = () => (dispatch) => {
  console.log("Users Started, Action");
  dispatch(onGetUsersStarted());
  // TODO: make an API Call
  // In Case of Successful API Call
  const response = {
    data: [
      { id: 1, name: "ABC", email: "a@b.com" },
      { id: 2, name: "EFG", email: "a@b.com" },
    ],
  };
  setTimeout(() => {
    dispatch(onGetUsersSucceeded(response));
  }, 5000);

  // In Case of Error
  if (false) {
    dispatch(onGetUsersFailed({ message: "Something went wrong" }));
  }
};
