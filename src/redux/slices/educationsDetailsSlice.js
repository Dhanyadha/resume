import { createSlice } from "@reduxjs/toolkit";

const educationDetailsSlice = createSlice({
  name: "educationDetails",
  initialState: {
    educationLevels: [
      {   
        id: Date.now(),
        type: "", 
        board: "",   
        school: "",
        hallticket: "",
        startDate: "",
        endDate: "",
        yearofPass: "",
        grade: "",
        city: "",
        description: "",
        stream: "",
      }
    ]
  },
  reducers: {
    addEducationDetails: (state, action) => {
      state.educationLevels = action.payload;
    }
  }
});

export const { addEducationDetails } = educationDetailsSlice.actions;
export default educationDetailsSlice.reducer;