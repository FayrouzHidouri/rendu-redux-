import { combineReducers } from "redux";
import eventsReducer from "./slices/eventsSlice";
import wishListReducer from "./slices/wishListSlice";

const rootReducer = combineReducers({
  events: eventsReducer,
  wishList: wishListReducer,
});

export default rootReducer;
