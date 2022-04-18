import {ADD_TO_CART, REMOVE_ITEM} from '../actions/Types';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log('reducer', action.payload);
  console.log('reducer sate', state?.cart);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(obj => obj?.item?.id !== action?.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
