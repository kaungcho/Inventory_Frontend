import API from '../apis/api';
import {FETCH_CATEGORY} from './type';
import Swal from 'sweetalert2';

const fetchCategoryList = () => async (dispatch) => {
    try {
      const data = await API.fetchAllCategory();
      dispatch({
        type: FETCH_CATEGORY,
        payload: { allCategoryList: data },
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
  
export default fetchCategoryList;