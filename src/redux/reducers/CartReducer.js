import {ADD_TO_CART, REMOVE_ITEM} from '../actions/Types';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log('reducer', action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
      case REMOVE_ITEM:
        return {
            ...state,
            cart: state.cart.filter((item, i) => i !== action.payload.id),
        }
    default:
      return state;
  }
};

export default cartReducer;
