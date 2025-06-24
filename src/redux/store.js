import { configureStore } from "@reduxjs/toolkit";
import basicDetailsSlice from "./slices/basicDetailsSlice";
import educationDetailsSlice from './slices/educationsDetailsSlice'; 
import internshipsDetailsSlice from './slices/internshipsDetailsSlice';

const store = configureStore({
  reducer: {
    basicDetails: basicDetailsSlice,
    educationDetails: educationDetailsSlice,
    internshipDetails: internshipsDetailsSlice,
  },
});

export default store;