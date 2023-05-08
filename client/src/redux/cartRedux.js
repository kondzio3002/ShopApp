export const getCart = ({ cart }) => cart.products;

const createActionName = actionName => `app/cart/${actionName}`;

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default cartReducer;