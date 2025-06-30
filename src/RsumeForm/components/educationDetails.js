import React from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addEducationDetails } from '../../redux/slices/educationsDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const EduTitles = [
  "10th / Secondary Education",
  "12th / Diploma",
  "Degree / B.Tech", 
  "P.G",
];

const EducationDetails = () => {
  const dispatch = useDispatch();
  const educationLevels = useSelector((state) => state.educationDetails.educationLevels);

  const handleAddEducation = () => {
    if (educationLevels.length >= EduTitles.length) return;
    
    const newEducation = {
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
      description: ""
    };
    dispatch(addEducationDetails([...educationLevels, newEducation]));
  };

  const handleRemoveEducation = (index) => {
    if (educationLevels.length === 1) return;
    const updated = educationLevels.filter((_, i) => i !== index);
    dispatch(addEducationDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...educationLevels];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addEducationDetails(updated));
  };

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Education Details</div>

      <div className={eduStyles.eduBody}>
        {educationLevels.map((edu, index) => (
          <Collapse
            key={edu.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={eduStyles.collapseHead}>
                    <div>{EduTitles[index]}</div>
                    {index === educationLevels.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveEducation(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={eduStyles.inputGroup}>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="type"
                        placeholder="Education Type"
                        value={edu.type}
                        onChange={(e) => handleInputChange(index, "type", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="board"
                        placeholder="Education Board"
                        value={edu.board}
                        onChange={(e) => handleInputChange(index, "board", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="institution"
                        placeholder="Institution Name"
                        value={edu.institution}
                        onChange={(e) => handleInputChange(index, "institution", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="hallticket"
                        placeholder="Hall Ticket"
                        value={edu.hallticket}
                        onChange={(e) => handleInputChange(index, "hallticket", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date"
                        value={edu.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date"
                        value={edu.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="yearOfPass"
                        placeholder="Year of Passing"
                        value={edu.yearOfPass}
                        onChange={(e) => handleInputChange(index, "yearOfPass", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="grade"
                        placeholder="Grade"
                        value={edu.grade}
                        onChange={(e) => handleInputChange(index, "grade", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="City"
                        value={edu.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <input
                        name="stream"
                        placeholder="Stream/Specialization"
                        value={edu.stream}
                        onChange={(e) => handleInputChange(index, "stream", e.target.value)}
                      />
                    </div>
                    <div className={eduStyles.inputRow}>
                      <textarea
                        name="description"
                        placeholder="Additional details about your education"
                        value={edu.description}
                        onChange={(e) => handleInputChange(index, "description", e.target.value)}
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        ))}

        <br />
        {educationLevels.length < EduTitles.length && (
          <Button onClick={handleAddEducation}>
            Add More
          </Button>
        )}
      </div>
    </div>
  );
};

export default EducationDetails;