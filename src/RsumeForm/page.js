import React from "react";
import formStyles from "./styles/FormStyle.module.scss";
import BasicDetails from "./components/basicDetails";
import EducationDetails from "./components/educationDetails";
import InternshipsDetails from "./components/internshipsDetails";

const ResumeForm = () => {
  return (
    <div className={formStyles.container}>
      <BasicDetails />
      <EducationDetails />
      <InternshipsDetails />
      
    </div>
  );
};

export default ResumeForm;