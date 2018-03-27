const defaultState = 0;
const decrease = (state = defaultState, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export { decrease };
