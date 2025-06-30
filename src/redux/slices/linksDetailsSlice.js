import { createSlice } from "@reduxjs/toolkit";

const linksDetailsSlice = createSlice({
  name: "linkDetails",
  initialState: {
    links: [
      {
        id: Date.now(),
        title: "",
        link: ""
      }
    ]
  },
  reducers: {
    addLinkDetails: (state, action) => {
      state.links = action.payload;
    }
  }
});

export const { addLinkDetails } = linksDetailsSlice.actions;
export default linksDetailsSlice.reducer;