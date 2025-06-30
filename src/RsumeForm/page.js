import React from "react";

import EducationDetails from "./components/educationDetails";
import CertificatesDetails from "./components/certificatesDetails";
import ResearchDetails from "./components/researchDetails";
import AccomplishmentsDetails from "./components/accomplishmentDetails";
import VolunteeringsDetails from "./components/volunteeringDetails";
import ProjectsDetails from "./components/projectsDetails";
import LinksDetails from "./components/linksDetails";
import ExperienceDetails from "./components/experiencesDetails";
import BasicDetails from "./components/basicDetails";
import InternshipsDetails from "./components/internshipsDetails";
import SkillDetails from "./components/skillsDetails";
import HobbiesDetails from "./components/hobbiesDetails";
import LanguagesDetails from "./components/languagesDetails";
import ExtraCurricularDetails from "./components/extracurricularDetails"


const ResumeBuilder = () => {
  return (
    <div>
      <BasicDetails />
      <EducationDetails />
      <ExperienceDetails />
      <ProjectsDetails />
      <CertificatesDetails />
      <ResearchDetails />
      <AccomplishmentsDetails />
      <VolunteeringsDetails />
      <LinksDetails />
      <InternshipsDetails/>
      <SkillDetails />
      <HobbiesDetails />
      <LanguagesDetails />
      <ExtraCurricularDetails />
      
    </div>
  );
};

export default ResumeBuilder;