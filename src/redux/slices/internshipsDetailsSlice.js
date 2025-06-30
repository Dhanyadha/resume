import { createSlice } from "@reduxjs/toolkit";

const internshipsDetailsSlice = createSlice({
  name: "internshipsDetails",
  initialState: {
    internships: [
      {
        id: Date.now(),
        company: "",
        project: "",
        startDate: "",
        endDate: "",
        city: "",
        description: ""
      }
    ]
  },
  reducers: {
    addInternshipDetails: (state, action) => {
      state.internships = action.payload;
    }
  }
});

export const { addInternshipDetails } = internshipsDetailsSlice.actions;
export default internshipsDetailsSlice.reducer;