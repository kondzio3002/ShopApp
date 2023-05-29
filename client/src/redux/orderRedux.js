export const getOrder = ({ order }) => order.products;

const createActionName = actionName => `app/cart/${actionName}`;

const ADD_CART = createActionName('ADD_CART');

export const addCart = (product, count, note) => ({ payload: { product, count, note }, type: ADD_CART });

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...statePart, products: { ...action.payload.product, ...action.payloda.count, ...action.payload.note } };
    default:
      return statePart;
  };
};

export default orderReducer;