// import http from "./httpService";
// import config from "../config.json";
// const apiEndpoint = config.apiUrl + "auth/users/";
import axiosInstance from "../axios";

export function register(user) {
  // return http.post(apiEndpoint, {
  //   username: user.username,
  //   email: user.email,
  //   password: user.password,
  //   first_name: "",
  //   last_name: "",
  // });
  return axiosInstance
    .post(`auth/users/`, {
      email: user.email,
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      // history.push("/login");
      console.log(res);
      console.log(res.data);
    });
    
}
