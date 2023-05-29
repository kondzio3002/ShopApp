export const getOrder = ({ order }) => order.products;

const createActionName = actionName => `app/cart/${actionName}`;

const ADD_ORDER = createActionName('ADD_ORDER');

export const addCart = (product, count, note) => ({ payload: { product, count, note }, type: ADD_ORDER });

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...statePart, products: { ...action.payload.product, ...action.payloda.count, ...action.payload.note } };
    default:
      return statePart;
  };
};

export default orderReducer;