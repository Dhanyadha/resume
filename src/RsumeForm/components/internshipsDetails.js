import React from "react";
import intStyles from "../styles/intStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addInternshipDetails } from '../../redux/slices/internshipsDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const InternshipsDetails = () => {
  const dispatch = useDispatch();
  const internships = useSelector((state) => state.internshipsDetails.internships);

  const handleAddInternship = () => {
    const newInternship = {
      id: Date.now(),
      company: "",
      project: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    };
    dispatch(addInternshipDetails([...internships, newInternship]));
  };

  const handleRemoveInternship = (index) => {
    if (internships.length === 1) return;
    const updated = internships.filter((_, i) => i !== index);
    dispatch(addInternshipDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...internships];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addInternshipDetails(updated));
  };

  return (
    <div className={intStyles.container}>
      <div className={intStyles.headerTitle}>Internships</div>

      <div className={intStyles.internshipBody}>
        {internships.map((internship, index) => (
          <Collapse
            key={internship.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={intStyles.collapseHead}>
                    <div>Internship {index + 1}</div>
                    {index === internships.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveInternship(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={intStyles.inputGroup}>
                    <div className={intStyles.inputRow}>
                      <input
                        name="company"
                        placeholder="Company Name"
                        value={internship.company}
                        onChange={(e) => handleInputChange(index, "company", e.target.value)}
                      />
                    </div>
                    <div className={intStyles.inputRow}>
                      <input
                        name="project"
                        placeholder="Project"
                        value={internship.project}
                        onChange={(e) => handleInputChange(index, "project", e.target.value)}
                      />
                    </div>
                    <div className={intStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={internship.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={intStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={internship.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={intStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="City"
                        value={internship.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={intStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={internship.description}
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
        <Button onClick={handleAddInternship}>
          Add Internship
        </Button>
      </div>
    </div>
  );
};

export default InternshipsDetails;