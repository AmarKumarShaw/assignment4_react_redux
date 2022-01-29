import {configureStore} from '@reduxjs/toolkit';
import studentReducer from "./features/studentSlice";
import storageSession from 'redux-persist/es/storage/session';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers({
  student:studentReducer,
});

const persistConfig = {
  key: 'root',
  storage:storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store =  configureStore({
    reducer:persistedReducer, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
    
})

export default store;