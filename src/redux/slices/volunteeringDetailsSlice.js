import { createSlice } from "@reduxjs/toolkit";

const volunteeringDetailsSlice = createSlice({
  name: "volunteeringDetails",
  initialState: {
    volunteerings: [
      {
        id: Date.now(),
        organization: "",
        role: "",
        startDate: "",
        endDate: "",
        city: "",
        description: ""
      }
    ]
  },
  reducers: {
    addVolunteeringDetails: (state, action) => {
      state.volunteerings = action.payload;
    }
  }
});

export const { addVolunteeringDetails } = volunteeringDetailsSlice.actions;
export default volunteeringDetailsSlice.reducer;