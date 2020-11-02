import { useDispatch, useSelector } from "react-redux";

import rootreducer from "./reducer";
function HomeScreen() {
  const det = useSelector((rootreducer) => rootreducer.user);
  const dis = useDispatch();

  return (
    <div className="App">
      <h3>HomeScreen</h3>
      <button
        onClick={() => {
          dis({
            type: "login",
            payload: "", //
          });
        }}
      >
        logout
      </button>
      <h2>{det.name}</h2>
      <h3>{det.email}</h3>
      <h3>{det.phone}</h3>
      <h3>{det.newThing}</h3>
    </div>
  );
}

export default HomeScreen;
