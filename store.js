import { configureStore } from '@reduxjs/toolkit';
import billsReducer from './src/reducers/billsReducer.js';

export default configureStore({
  reducer: {
    bills: billsReducer,
  },
});
