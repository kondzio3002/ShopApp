export const getCart = ({ cart }) => cart.products;

const createActionName = actionName => `app/cart/${actionName}`;

const ADD_PRODUCT = createActionName('ADD_PRODUCT');

export const addProduct = (product, count) => ({ payload: { product, count }, type: ADD_PRODUCT });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...statePart, products: [ ...statePart.products, { ...action.payload.product, ...action.payload.count } ]};
    default:
      return statePart;
  };
};

export default cartReducer;