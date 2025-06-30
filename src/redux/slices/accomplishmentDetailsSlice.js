import { createSlice } from "@reduxjs/toolkit";

const accomplishmentDetailsSlice = createSlice({
  name: "accomplishmentDetails",
  initialState: {
    accDetails: [
    {
      id: Date.now(),
      company: "",
      accomplishment: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    }
  ]
},
  reducers: {
    addAccomplishmentDetails: (state, action) => {
      state.accDetails = action.payload; 
    }
  }
});

export const { addAccomplishmentDetails } = accomplishmentDetailsSlice.actions;
export default accomplishmentDetailsSlice.reducer;