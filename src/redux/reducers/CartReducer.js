import {ADD_QUANTITY,SUB_QUANTITY, ADD_TO_CART, REMOVE_ITEM} from '../actions/Types';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {

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
    case ADD_QUANTITY:
      const cart_state = state.cart.map(item =>
        item?.item?.id === action?.payload
          ? {...item, qty: item.qty + 1}
          : item,
      );
      return {
        ...state,
        cart: cart_state,
      };
    case SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
            item?.item?.id === action?.payload
            ? {
                ...item,
                qty: item.qty !== 1 ? item.qty - 1 : 1,
              }
            : item,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
