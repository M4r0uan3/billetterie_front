// import http from "./httpService";
// import config from "../config.json";
import axiosInstance from "../axios";
export function getThemes() {
  // return http.get(config.apiUrl + "themes/");
  return axiosInstance.get("themes/");
}
