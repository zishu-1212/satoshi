import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";
import myNftReducer from "./connection/reducer2";

const rootReducer = combineReducers({
  connect: connectReducer,
  connected: connectReducer,
  myNft: myNftReducer,
});

export default rootReducer;
