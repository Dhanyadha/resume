import { createSlice } from "@reduxjs/toolkit";

const BasicDetailsSlice = createSlice({
  name: "Basic Details",
  initialState: {
    basicDetails: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      profile: "",
      dob: "",
      proffesionalSummary: "",
    },
  },

  reducers: {
    addBasicDetails: (state, { payload }) => {
      state.basicDetails = payload;
    },
  },
});

export const { addBasicDetails } = BasicDetailsSlice.actions;
export default BasicDetailsSlice.reducer;

