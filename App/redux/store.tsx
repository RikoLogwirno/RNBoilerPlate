import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage'; // defaults to localStorage for web

import LoginReducer from './reducer/LoginReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  LoginReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export default {store, persistor};
