import http from "./httpService";
import config from "../config.json";

export function getThemes() {
  return http.get(config.apiUrl + "themes/");
}
