import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: []
};

export const extraDetailsSlice = createSlice({
  name: "extraDetails",
  initialState,
  reducers: {
    addExtraDetails: (state, action) => {
      state.activities = action.payload;
    },
    resetExtraDetails: (state) => {
      state.activities = [];
    }
  },
});

export const { addExtraDetails, resetExtraDetails } = extraDetailsSlice.actions;
export default extraDetailsSlice.reducer;