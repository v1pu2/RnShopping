import {LOG_IN, LOG_OUT, VERIFY_OTP} from './Types';

export const logIn = data => async dispatch => {
  dispatch({
    type: LOG_IN,
    payload: data,
  });
};
export const verifyOtp = () => async dispatch => {
  dispatch({
    type: VERIFY_OTP,
    payload: true,
  });
};
export const logOut = () => async dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: false,
  });
};
