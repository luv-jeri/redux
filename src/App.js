import logo from "./logo.svg";
import "./App.css";
import Home from "./homeScreen";

import { login } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const userDetails = {
    name: "Nayan",
    email: "nayan@email.com",
    phone: "000000",
  };

  return (
    <div className="App">
      <h1
        onClick={() => {
          dispatch(login(userDetails));
        }}
      >
        Login
      </h1>

      <Home />
    </div>
  );
}

export default App;
