import {LOG_IN, LOG_OUT,VERIFY_OTP} from '../actions/Types';

const initialState = {
  users: [],
  userDetail: {},
  loginData: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loginData: action.payload,
      };
      case VERIFY_OTP:
      return {
        ...state,
        isVerified: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
