import { combineReducers } from "redux";
import user from "./user";
import rooms from "./room";

export default combineReducers({
  user,
  rooms
});
