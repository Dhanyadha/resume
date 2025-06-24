import React from "react";
import intStyles from '../../RsumeForm/styles/intStyles.module.scss'
import { Button, Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addInternshipLevel, updateInternshipLevel,removeInternshipLevel } from "../../redux/slices/internshipsDetailsSlice";

const InternshipTitles = [
  "Internship 1",
  "Internship 2",
  "Internship 3",
  "Internship 4",
];

const InternshipsDetails = () => {
  const dispatch = useDispatch();
  const internshipLevels = useSelector(
    (state) => state.internshipDetails.internshipLevels
  );

  const handleInputChange = (index, name, value) => {
    dispatch(updateInternshipLevel({ index, name, value }));
  };

  const handleAddInternship = () => {
    if (internshipLevels.length >= InternshipTitles.length) return;
    
    const newInternship = {
      id: Date.now(),
      company: "",
      project: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };
    
    const updatedLevels = [...internshipLevels, newInternship];
    dispatch(addInternshipLevel(updatedLevels));
  };

  const handleRemoveInternship = (index) => {
    dispatch(removeInternshipLevel(index));
  };

  return (
    <div className={intStyles.container}>
      <h2 className={intStyles.headerTitle}>Internship Details</h2>
      
      <div className={intStyles.intBody}>
        {internshipLevels.map((internship, index) => (
          <Collapse
            key={internship.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={intStyles.collapseHead}>
                    <div>{InternshipTitles[index] || `Additional Internship ${index + 1}`}</div>
                    {index === internshipLevels.length - 1 && (
                      <div onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveInternship(index);
                      }}>
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={intStyles.internshipFields}>
                    <input
                      value={internship.company}
                      onChange={(e) => handleInputChange(index, "company", e.target.value)}
                      placeholder="Company Name"
                    />
                    <input
                      value={internship.project}
                      onChange={(e) => handleInputChange(index, "project", e.target.value)}
                      placeholder="Project Name"
                    />
                    <div className={intStyles.dateRow}>
                      <input
                        type="date"
                        value={internship.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                        placeholder="Start Date"
                      />
                      <input
                        type="date"
                        value={internship.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                        placeholder="End Date"
                      />
                    </div>
                    <input
                      value={internship.city}
                      onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      placeholder="City"
                    />
                    <textarea
                      value={internship.description}
                      onChange={(e) => handleInputChange(index, "description", e.target.value)}
                      placeholder="Description"
                      rows={4}
                    />
                  </div>
                ),
              },
            ]}
          />
        ))}
        
        {internshipLevels.length < InternshipTitles.length && (
          <Button 
            type="primary" 
            onClick={handleAddInternship}
            className={intStyles.addButton}
          >
            Add More
          </Button>
        )}
      </div>
    </div>
  );
};

export default InternshipsDetails;