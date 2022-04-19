import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from './Types';

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    payload: id,
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    payload: id,
  };
};
