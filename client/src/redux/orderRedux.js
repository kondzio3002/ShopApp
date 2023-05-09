export const getOrder = ({ order }) => order.products;

// const createActionName = actionName => `app/cart/${actionName}`;

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default orderReducer;