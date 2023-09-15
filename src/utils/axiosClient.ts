import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-tintuc.enetviet.com/",
  headers: {
    Authorization: "3EC79C17-63ED-4166-BD58-04397B94312C",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    //Gửi kèm accessToken nếu như có tính năng đăng nhập
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
