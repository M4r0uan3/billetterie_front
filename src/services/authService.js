import axiosInstance from "../axios";
import jwtDecode from "jwt-decode";

export function login(username, password) {
  return axiosInstance
    .post(`auth/jwt/create`, {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      window.location = "/";
    });
}

export function logout() {
  axiosInstance.post("auth/users/logout");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance.defaults.headers["Authorization"] = null;
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("access_token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
