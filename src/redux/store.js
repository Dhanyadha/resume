import { configureStore } from "@reduxjs/toolkit";
import basicDetailsReducer from "./slices/basicDetailsSlice";
import educationDetailsReducer from "./slices/educationsDetailsSlice";
import experienceDetailsReducer from "./slices/experienceDetailsSlice";
import projectDetailsReducer from "./slices/projectsDetailsSlice";
import certificateDetailsReducer from "./slices/certificationsDetailsSlice";
import researchDetailsReducer from "./slices/researchDetailsSlice";
import accomplishmentDetailsReducer from "./slices/accomplishmentDetailsSlice";
import volunteeringDetailsReducer from "./slices/volunteeringDetailsSlice";
import linkDetailsReducer from "./slices/linksDetailsSlice";
import internshipsDetailsReducer from "./slices/internshipsDetailsSlice";
import hobbiesDetailsReducer from "./slices/hobbiesDetailsSlice";
import languagesDetailsReducer from "./slices/languagesDetailsSlice";
import extraDetailsReducer from "./slices/extraDetailsSlice";
import skillsDetailsReducer from "./slices/skillDetailsSlice";

export const store = configureStore({
  reducer: {
    basicDetails: basicDetailsReducer,
    educationDetails: educationDetailsReducer,
    experienceDetails: experienceDetailsReducer,
    projectDetails: projectDetailsReducer,
    certificateDetails: certificateDetailsReducer,
    researchDetails: researchDetailsReducer,
    accomplishmentDetails: accomplishmentDetailsReducer,
    volunteeringDetails: volunteeringDetailsReducer,
    linkDetails: linkDetailsReducer,
    internshipsDetails: internshipsDetailsReducer,
    hobbiesDetails: hobbiesDetailsReducer,
    languagesDetails: languagesDetailsReducer,
    extraDetails: extraDetailsReducer,
    skillsDetails: skillsDetailsReducer
  },
});