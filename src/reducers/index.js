import { combineReducers } from "redux";

import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import botReducer from "./botReducer";

const rootReducer = combineReducers({
  messages: messageReducer,
  user: userReducer,
  bot: botReducer
});

export default rootReducer;