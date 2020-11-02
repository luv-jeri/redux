// ! User Details
const stateStore = {
  name: "Sanjay ",
  email: "Sanjay@email.com",
  phone: "11111",
}; // real store Empty

const user = (state = stateStore, action) => {
  switch (action.type) {
    case "login":
      return action.payload;

    default:
      return state;
  }
};

export default user;
