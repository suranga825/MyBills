import { createSlice } from '@reduxjs/toolkit';

export const myBillsSlice = createSlice({
  name: 'myBills',
  initialState: {
    myBills: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.mybills += action.payload;
    },
  },
});

export const { fetchMyBills } = myBillsSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMyBills= state => state.myBills;

export default myBillsSlice.reducer;
