// import http from "./httpService";
// import config from "../config.json";
// import { func } from "prop-types";
// const apiEndpoint = config.apiUrl + "auth/jwt/create";
import axiosInstance from "../axios";

export function login(username, password) {
  //   return http.post(apiEndpoint, { username, password });
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
      //console.log(res);
      //console.log(res.data);
    });
}
