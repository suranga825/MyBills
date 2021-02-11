import { configureStore } from '@reduxjs/toolkit';
import myBillsReducer from './src/screens/MyBills/myBillsSlice.js';

export default configureStore({
  reducer: {
    myBiils: myBillsReducer,
  },
});
