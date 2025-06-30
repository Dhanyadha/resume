import { createSlice } from "@reduxjs/toolkit";

const projectsDetailsSlice = createSlice({
  name: "projectDetails",
  initialState: {
    projects: [
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
    addProjectDetails: (state, action) => {
      state.projects = action.payload;
    }
  }
});

export const { addProjectDetails } = projectsDetailsSlice.actions;
export default projectsDetailsSlice.reducer;