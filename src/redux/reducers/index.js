import { combineReducers } from "redux";
import userReducer from "./user";
import alertReducer from "./alert";
import productReducer from "./product";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user", "product"],
};
const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
