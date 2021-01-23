import Instance from "../utils/AxiosUtil";

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

export const getUsers = (query_params = {}) => (dispatch) => {
  dispatch(onGetUsersStarted());
  return Instance.axiosInstance()
    .get(
      "/users",
      { params: query_params },
      {
        timeout: 5000,
      }
    )
    .then((response) => {
      console.log(response);
      dispatch(onGetUsersSucceeded(response));
    })
    .catch((error) => {
      const { response } = error;
      dispatch(onGetUsersFailed(response));
    });
};
