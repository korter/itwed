import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  photos: photosReducer,
  user: userReducer,
});

export default rootReducer;
