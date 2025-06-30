import React from "react";
import basicDetailsStyles from "../styles/basicDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasicDetails } from "../../redux/slices/basicDetailsSlice";

const BasicDetails = () => {
  const dispatch = useDispatch();

  const basicDetails = useSelector((state) => state.basicDetails.basicDetails);

  return (
    <div className={basicDetailsStyles.container}>    
      <div className={basicDetailsStyles.headerTitle}>Basic Details</div>

      <div className={basicDetailsStyles.basicDetailsBody}>
        <input
          name="profile"
          type="file"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                profile: e.target.files[0],
              })
            )
          }
          filename={basicDetails?.profile}
        />
        <br />
        <input
          name="firstName"
          placeholder="First Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                firstName: e.target.value,
              })
            )
          }
          value={basicDetails?.firstName}
        />
        <input
          name="middleName"
          placeholder="Middle Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                middleName: e.target.value,
              })
            )
          }
          value={basicDetails?.middleName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                lastName: e.target.value,
              })
            )
          }
          value={basicDetails?.lastName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                email: e.target.value,
              })
            )
          }
          value={basicDetails?.email}
        />
        <input
          name="phone"
          type="number"
          placeholder="Phone Number"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                phone: Number(e.target.value),
              })
            )
          }
          value={basicDetails?.phone}
        />
        <input
          name="dob"
          placeholder="DD/MM/YY"
          onChange={(e) =>
            dispatch(
              addBasicDetails({
                ...basicDetails,
                dob: e.target.value,
              })
            )
          }
          value={basicDetails?.dob}
        />
      </div>
      <textarea
        name="proffesionalSummary"
        placeholder="Professional Summary"
        onChange={(e) =>
          dispatch(
            addBasicDetails({
              ...basicDetails,
              proffesionalSummary: e.target.value,
            })
          )
        }
        value={basicDetails?.proffesionalSummary}
      />
    </div>
  );
};

export default BasicDetails;