import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: []
};

 const languagesDetailsSlice = createSlice({
  name: "languagesDetails",
  initialState,
  reducers: {
    addLanguagesDetails: (state, action) => {
      state.languages = action.payload;
    },
    resetLanguagesDetails: (state) => {
      state.languages = [];
    }
  },
});

export const { addLanguagesDetails, resetLanguagesDetails } = languagesDetailsSlice.actions;
export default languagesDetailsSlice.reducer;