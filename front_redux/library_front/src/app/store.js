import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import main_shopReucer, { cartCalc, dogetbooksAsync } from '../features/main_shop/main_shopSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
    main_shop: main_shopReucer
  },
});

store.dispatch(dogetbooksAsync())
store.dispatch(cartCalc())