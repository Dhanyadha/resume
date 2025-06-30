import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hobbies: []
};

export const hobbiesDetailsSlice = createSlice({
  name: "hobbiesDetails",
  initialState,
  reducers: {
    addHobbiesDetails: (state, action) => {
      state.hobbies = action.payload;
    },
    resetHobbiesDetails: (state) => {
      state.hobbies = [];
    }
  },
});

export const { addHobbiesDetails, resetHobbiesDetails } = hobbiesDetailsSlice.actions;
export default hobbiesDetailsSlice.reducer;