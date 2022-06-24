import axiosInstance from "../axios";
export function getThemes() {
  return axiosInstance.get("api/themes/");
}
