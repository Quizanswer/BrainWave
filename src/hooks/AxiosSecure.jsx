import axios from "axios";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
const axisoSecure = axios.create({
  baseURL: "https://test-alchemy-backend.onrender.com",
});
const AxiosSecure = () => {
  // const navigate = useNavigate();

  axisoSecure.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //  FOR RESPONSE
  axisoSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const status = await error.response.status;
      if (status === 401) {
        navigate("/login");
      }
    }
  );
  return axisoSecure;
};

export default AxiosSecure;
