import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface TestState {
  counter: number;
}

const initialState: TestState = {
  counter: 0,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

export const {increment, decrement, incrementBy} = testSlice.actions;

export const selectCounter = (state: RootState) => state.test.counter;

export default testSlice.reducer;
