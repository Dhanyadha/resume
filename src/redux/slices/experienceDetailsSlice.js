import { createSlice } from "@reduxjs/toolkit";

const experienceDetailsSlice = createSlice({
  name: "experienceDetails",
  initialState: {
    experiences: [
      {
        id: Date.now(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        city: "",
        description: ""
      }
    ]
  },
  reducers: {
    addExperienceDetails: (state, action) => {
      state.experiences = action.payload;
    }
  }
});

export const { addExperienceDetails } = experienceDetailsSlice.actions;
export default experienceDetailsSlice.reducer;