import Swal from 'sweetalert2';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './type';
import API from '../apis/api';

const login = (username, password) => async (dispatch) => {
  try {
    const data = await API.loginAPI(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data },
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
    dispatch({
      type: LOGIN_FAIL,
    });
    return Promise.reject();
  }
};

export default login;
