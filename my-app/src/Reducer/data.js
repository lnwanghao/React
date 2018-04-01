const defaultState = [];
const data = (state = defaultState, { type, item }) => {
  switch (type) {
    case "ADD":
      console.log(state);
      return [item, ...state];
    case "DELETE":
      return state.filter(v => v.key !== item.key);
    case "UPDATE":
      return Object.assign([], [...state], [item]);
    case "ALL":
      return item;
    default:
      return state;
  }
};
export default data;
