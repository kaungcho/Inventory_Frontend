import API from '../apis/api';
import {FETCH_PRODUCT,FETCH_SINGLE_PRODUCT} from './type';
import Swal from 'sweetalert2';

const fetchProductList = () => async (dispatch) => {
    try {
      const data = await API.fetchAllProduct();
      dispatch({
        type: FETCH_PRODUCT,
        payload: { allProductList: data },
      });
      return Promise.resolve();
    } catch (error) {
      const message =
        (error.response?.data?.message) ||
        error.message ||
        error.toString();
      Swal.fire({
        icon: 'error',
        text: message,
      });
      return Promise.reject();
    }
  };

const fetchSingleProductList = (id) => async (dispatch) => {
    try {
      const data = await API.fetchSingleProduct(id);
      dispatch({
        type: FETCH_SINGLE_PRODUCT,
        payload: { singleProductList: data },
      });
      return Promise.resolve();
    } catch (error) {
      const message =
        (error.response?.data?.message) ||
        error.message ||
        error.toString();
      Swal.fire({
        icon: 'error',
        text: message,
      });
      return Promise.reject();
    }
  };
  
export default {fetchProductList,fetchSingleProductList};