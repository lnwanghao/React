const defaultState = 0;
const increase = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
  }
};
export { increase };
