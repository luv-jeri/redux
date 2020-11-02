import { combineReducers } from "redux";
import counter from "./counter.jsx";
import user from "./details.jsx";



const rootreducer = combineReducers({
  counter,
  user,

  
});
export default rootreducer;
