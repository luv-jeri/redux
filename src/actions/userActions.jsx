import counter from "../reducer/counter";

export const login = (data) => {
  return async (dispatch, getState) => {
    const pre = getState();
    console.log(pre.user);

    const newData = {
      ...data,
      newThing: pre.user.name,
    };

    dispatch({
      type: "login",
      payload: newData,
    });
  };
};
