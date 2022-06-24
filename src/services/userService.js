import axiosInstance from "../axios";

export function register(user) {
  return axiosInstance
    .post(`auth/users/`, {
      email: user.email,
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}
