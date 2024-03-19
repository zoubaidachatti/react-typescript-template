import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/app/appSlice';
import { productsApi } from './api/products/productsApi';

const rootReducer = combineReducers({
  appReducer: appSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([productsApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
