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
      },
    ],
  },
  reducers: {
    addEducationLevel: (state, action) => {
      state.educationLevels.push(action.payload);
    },
    updateEducationLevel: (state, action) => {
      const { index, field, value } = action.payload;
      state.educationLevels[index][field] = value;
    },
    removeEducationLevel: (state, action) => {
      state.educationLevels.splice(action.payload, 1);
   
      
    },
  },
});

export const {addEducationLevel,updateEducationLevel,removeEducationLevel,} = educationDetailsSlice.actions;

export default educationDetailsSlice.reducer;