import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  internshipLevels: [
    {
      id: Date.now(),
      company: "",
      project: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
};

const internshipsDetailsSlice = createSlice({
  name: "internshipDetails",
  initialState,
  reducers: {
    addInternshipLevel: (state, action) => {
      state.internshipLevels = action.payload;
    },
    updateInternshipLevel: (state, action) => {
      const { index, name, value } = action.payload;
      state.internshipLevels[index][name] = value;
    },
    removeInternshipLevel: (state, action) => {
      state.internshipLevels.splice(action.payload, 1);
    },
  },
});

export const { addInternshipLevel, updateInternshipLevel, removeInternshipLevel } = 
  internshipsDetailsSlice.actions;
export default internshipsDetailsSlice.reducer;