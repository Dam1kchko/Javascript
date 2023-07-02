import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inStocksReducer from "./InStocks";
import searchReducer from "./searchText";
import stockReducer from "./stocks";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  inStocks: inStocksReducer,
  searchText: searchReducer,
  stockList: stockReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

let store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };
