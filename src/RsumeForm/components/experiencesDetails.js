import React from "react";
import expStyles from "../styles/expStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addExperienceDetails } from '../../redux/slices/experienceDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const ExperienceDetails = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experienceDetails.experiences);

  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    };
    dispatch(addExperienceDetails([...experiences, newExperience]));
  };

  const handleRemoveExperience = (index) => {
    if (experiences.length === 1) return;
    const updated = experiences.filter((_, i) => i !== index);
    dispatch(addExperienceDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addExperienceDetails(updated));
  };

  return (
    <div className={expStyles.container}>
      <div className={expStyles.headerTitle}>Work Experience</div>

      <div className={expStyles.experienceBody}>
        {experiences.map((exp, index) => (
          <Collapse
            key={exp.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={expStyles.collapseHead}>
                    <div>Experience {index + 1}</div>
                    {index === experiences.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveExperience(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={expStyles.inputGroup}>
                    <div className={expStyles.inputRow}>
                      <input
                        name="company"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) => handleInputChange(index, "company", e.target.value)}
                      />
                    </div>
                    <div className={expStyles.inputRow}>
                      <input
                        name="role"
                        placeholder="Job Role/Position"
                        value={exp.role}
                        onChange={(e) => handleInputChange(index, "role", e.target.value)}
                      />
                    </div>
                    <div className={expStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={exp.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={expStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={exp.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={expStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="Location/City"
                        value={exp.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={expStyles.inputRow}>
                      <textarea
                        placeholder="Job Description"
                        value={exp.description}
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
        <Button onClick={handleAddExperience}>
          Add Experience
        </Button>
      </div>
    </div>
  );
};

export default ExperienceDetails;