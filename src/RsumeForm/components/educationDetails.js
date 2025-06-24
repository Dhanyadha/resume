import React from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {addEducationLevel,updateEducationLevel,removeEducationLevel,} from "../../redux/slices/educationsDetailsSlice";

const EduTitles = [
  "10th / Secondary Education",
  "12th / Diploma",
  "Degree / B.Tech",
  "P.G",
];

const EducationDetails = () => {
  const dispatch = useDispatch();
  const educationLevels = useSelector((state) => state.educationDetails.educationLevels);

  const handleInputChange = (index, name, value) => {
    dispatch(updateEducationLevel({ index, name, value }));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Education Details</div>

      <div className={eduStyles.eduBody}>
        {educationLevels?.map((eachLevel, index) => {
          return (
            <Collapse
              key={eachLevel.id}
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>{EduTitles[index] || "Additional Education"}</div>
                      {index === educationLevels?.length - 1 && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(removeEducationLevel(index));
                          }}
                        >
                          <DeleteOutlined />
                        </div>
                      )}
                    </div>
                  ),
                  children: (
                    <div>
                      <input
                        name="type"
                        placeholder="Enter Your Education Type"
                        onChange={(e) =>
                          handleInputChange(index, "type", e.target.value)
                        }
                      />
                      <input
                        name="board"
                        placeholder="Enter Your Education Board"
                        onChange={(e) =>
                          handleInputChange(index, "board", e.target.value)
                        }
                      />
                      <input
                        name="institution"
                        placeholder="Enter Your Educational Institution Name"
                        onChange={(e) =>
                          handleInputChange(index, "institution", e.target.value)
                        }
                      />
                      <input
                        name="hallticket"
                        placeholder="Enter Your HallTicket"
                        onChange={(e) =>
                          handleInputChange(index, "hallticket", e.target.value)
                        }
                      />
                      <input
                        name="startDate"
                        placeholder="Enter Your StartDate"
                        onChange={(e) =>
                          handleInputChange(index, "startDate", e.target.value)
                        }
                      />
                      <input
                        name="endDate"
                        placeholder="Enter Your EndDate"
                        onChange={(e) =>
                          handleInputChange(index, "endDate", e.target.value)
                        }
                      />
                      <input
                        name="yearOfPass"
                        placeholder="Enter Your Year Of Pass"
                        onChange={(e) =>
                          handleInputChange(index, "yearOfPass", e.target.value)
                        }
                      />
                      <input
                        name="grade"
                        placeholder="Enter Your Grade"
                        onChange={(e) =>
                          handleInputChange(index, "grade", e.target.value)
                        }
                      />
                      <input
                        name="city"
                        placeholder="Enter Your City"
                        onChange={(e) =>
                          handleInputChange(index, "city", e.target.value)
                        }
                      />
                      <input
                        name="stream"
                        placeholder="Enter Your Stream"
                        onChange={(e) =>
                          handleInputChange(index, "stream", e.target.value)
                        }
                      />
                      <textarea
                        placeholder="Description"
                        name="description"
                        onChange={(e) =>
                          handleInputChange(index, "description", e.target.value)
                        }
                      />
                    </div>
                  ),
                },
              ]}
            />
          );
        })}

        <br />
        <Button
          onClick={() => {
            if (educationLevels?.length === EduTitles?.length) {
              return;
            }
            dispatch(
              addEducationLevel({
                id: Date.now(),
                type: "",
                board: "",
                institution: "",
                hallticket: "",
                startDate: "",
                endDate: "",
                yearOfPass: "",
                grade: "",
                city: "",
                stream: "",
                description: "",
              })
            );
          }}
        >
          Add More
        </Button>
      </div>
    </div>
  );
};

export default EducationDetails;