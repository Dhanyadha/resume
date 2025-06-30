import React from "react";
import researchStyles from "../styles/researchStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addResearchDetails } from '../../redux/slices/researchDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const ResearchDetails = () => {
  const dispatch = useDispatch();
  const researches = useSelector((state) => state.researchDetails.researches);

  const handleAddResearch = () => {
    const newResearch = {
      id: Date.now(),
      organization: "",
      title: "",
      type: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    dispatch(addResearchDetails([...researches, newResearch]));
  };

  const handleRemoveResearch = (index) => {
    if (researches.length === 1) return;
    const updated = researches.filter((_, i) => i !== index);
    dispatch(addResearchDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...researches];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addResearchDetails(updated));
  };

  return (
    <div className={researchStyles.container}>
      <div className={researchStyles.headerTitle}>Research</div>

      <div className={researchStyles.researchBody}>
        {researches.map((research, index) => (
          <Collapse
            key={research.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={researchStyles.collapseHead}>
                    <div>Research {index + 1}</div>
                    {index === researches.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveResearch(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={researchStyles.inputGroup}>
                    <div className={researchStyles.inputRow}>
                      <input
                        name="organization"
                        placeholder="Organization"
                        value={research.organization}
                        onChange={(e) => handleInputChange(index, "organization", e.target.value)}
                      />
                    </div>
                    <div className={researchStyles.inputRow}>
                      <input
                        name="title"
                        placeholder="Title"
                        value={research.title}
                        onChange={(e) => handleInputChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div className={researchStyles.inputRow}>
                      <input
                        name="type"
                        placeholder="Type"
                        value={research.type}
                        onChange={(e) => handleInputChange(index, "type", e.target.value)}
                      />
                    </div>
                    <div className={researchStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={research.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={researchStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={research.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={researchStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={research.description}
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
        <Button onClick={handleAddResearch}>
          Add Research
        </Button>
      </div>
    </div>
  );
};

export default ResearchDetails;