import { combineReducers } from "redux";
import onlineSearch  from './onlineSearchReducer';
import offlineSearch from "./offlineSearchReducer";

export default combineReducers({
  onlineSearch,
  offlineSearch
});
