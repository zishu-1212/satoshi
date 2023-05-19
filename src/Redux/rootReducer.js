import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";

const rootReducer = combineReducers({
  connect: connectReducer,
  connected: connectReducer,
});

export default rootReducer;
