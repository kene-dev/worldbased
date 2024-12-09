// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import  contentfulApi  from '../services/contentfulApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import  cartReducer  from './cartSlice';


// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // Only persist the cart slice
};
  
  // Combine reducers
const rootReducer = combineReducers({
cart: cartReducer,
});
  
  // Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    [contentfulApi.reducerPath]: contentfulApi.reducer, // Add the contentfulApi reducer
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }).concat(contentfulApi.middleware), // Add the RTK Query middleware
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;