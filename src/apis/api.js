import axios from "axios";
import URL from "../constants/url";
import authHeader from '../constants/authHeader';

const loginAPI = (name , password) => {
    return axios
    .post(URL.LOCAL_API_URL + "login", {
      name,
      password,
    })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

const fetchAllCategory = () => {
  return axios
    .post(URL.LOCAL_API_URL + "category/list", {}, {
      headers: authHeader()
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
    });
};

const fetchAllProduct = () => {
  return axios
    .post(URL.LOCAL_API_URL + "product/list", {}, {
      headers: authHeader()
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
    });
};

const fetchSingleProduct = (id) => {
  return axios
    .post(URL.LOCAL_API_URL + "single-product/" + id, {}, {
      headers: authHeader()
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
    });
};


export default {
  loginAPI,
  fetchAllCategory,
  fetchAllProduct,
  fetchSingleProduct
};