import { createSlice } from "@reduxjs/toolkit";

const researchDetailsSlice = createSlice({
  name: "researchDetails",
  initialState: {
    researches: [
      {
        id: Date.now(),
        organization: "",
        title: "",
        type: "",
        startDate: "",
        endDate: "",
        description: ""
      }
    ]
  },
  reducers: {
    addResearchDetails: (state, action) => {
      state.researches = action.payload;
    }
  }
});

export const { addResearchDetails } = researchDetailsSlice.actions;
export default researchDetailsSlice.reducer;