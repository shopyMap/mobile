import {createSlice} from '@reduxjs/toolkit';

interface ScrollState {
  isScrolling: boolean;
}

const initialState: ScrollState = {
  isScrolling: false,
};

const scrollSlice = createSlice({
  name: 'scrolling',
  initialState,
  reducers: {
    changeScrollState(state) {
      state.isScrolling = !state.isScrolling;
    },
    setScrolling(state, action) {
      state.isScrolling = action.payload;
    },
  },
});

export const {changeScrollState, setScrolling} = scrollSlice.actions;
export default scrollSlice.reducer;
