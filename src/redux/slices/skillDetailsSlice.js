import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: []
};

export const skillsDetailsSlice = createSlice({
  name: "skillsDetails",
  initialState,
  reducers: {
    addSkillsDetails: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { addSkillsDetails } = skillsDetailsSlice.actions;
export default skillsDetailsSlice.reducer;