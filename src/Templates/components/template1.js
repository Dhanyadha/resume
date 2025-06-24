// import React, { useEffect, useState } from "react";
// import templateStyles from "../styles/template1.module.scss";
// import { useSelector } from "react-redux";

// const Template1 = () => {
//   const studentDetails = useSelector((state) => state);

//   const basicDetails = studentDetails?.basicDetails?.basicDetails || {};

//   const [profile, setProfile] = useState("");

//   useEffect(() => {
//     const file = basicDetails?.profile;

//     const imageReader = new FileReader();

//     imageReader.onloadend = () => {
//       setProfile(imageReader.result);
//     };

//     imageReader.readAsDataURL(file);
//   }, [basicDetails?.profile]);

//   return (
//     <div className={templateStyles.container}>
//       <img src={profile} alt='' width={"10%"} />

//       <div>{basicDetails?.firstName}</div>
//       <div>{basicDetails?.middleName}</div>
//       <div>{basicDetails?.lastName}</div>
//       <div>{basicDetails?.email}</div>
//       <div>{basicDetails?.phone}</div>
//       <div>{basicDetails?.dob}</div>
//       <div>{basicDetails?.proffesionalSummary}</div>
//     </div>
//   );
// };

// export default Template1;


























import React, { useEffect, useState } from "react";
import templateStyles from "../styles/template1.module.scss";
import { useSelector } from "react-redux";

const Template1 = () => {
  const studentDetails = useSelector((state) => state);
  const basicDetails = studentDetails?.basicDetails?.basicDetails || {};
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const file = basicDetails?.profile;
    
    if (file instanceof File) {
      const imageReader = new FileReader();
      imageReader.onloadend = () => {
        setProfile(imageReader.result);
      };
      imageReader.readAsDataURL(file);
    }
  }, [basicDetails?.profile]);

  // Helper function to render field only if it exists
  const renderField = (value, label) => {
    if (!value) return null;
    return (
      <div className={templateStyles.field}>
        {label && <strong>{label}: </strong>}
        {value}
      </div>
    );
  };

  return (
    <div className={templateStyles.container}>
      {profile && (
        <img 
          src={profile} 
          alt="Profile" 
          className={templateStyles.profileImage}
        />
      )}

      <div className={templateStyles.nameSection}>
        {renderField(basicDetails?.firstName)}
        {renderField(basicDetails?.middleName)}
        {renderField(basicDetails?.lastName)}
      </div>

      {renderField(basicDetails?.email, "Email")}
      {renderField(basicDetails?.phone, "Phone")}
      {renderField(basicDetails?.dob, "Date of Birth")}
      {renderField(basicDetails?.professionalSummary, "Summary")}
    </div>
  );
};

export default Template1;