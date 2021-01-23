import axios from "axios";

const Instance = {
  axiosInstance(contentType = "application/json", auth = false) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 60000,
      headers: auth
        ? this.getAuthHeader(contentType)
        : this.getHeader(contentType),
    });
    return instance;
  },
  getHeader(contentType = "application/json") {
    const API_HEADER = {
      "Content-Type": contentType,
    };
    return API_HEADER;
  },
  getAuthHeader(contentType = "application/json") {
    const user = JSON.parse(localStorage.getItem("user"));
    const API_HEADER = {
      "Content-Type": contentType,
      Authorization: user.token,
    };
    return API_HEADER;
  },
};

export default Instance;
