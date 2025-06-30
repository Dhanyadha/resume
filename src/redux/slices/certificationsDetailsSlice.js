import { createSlice } from "@reduxjs/toolkit";

const certificateDetailsSlice = createSlice({
  name: "certificateDetails", 
  initialState: {
    certificates: [
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
    addCertificateDetails: (state, action) => {
      state.certificates = action.payload;
    }
  }
});

export const { addCertificateDetails } = certificateDetailsSlice.actions;
export default certificateDetailsSlice.reducer;