import React from "react";
import accStyles from "../styles/accStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addAccomplishmentDetails } from '../../redux/slices/accomplishmentDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const AccomplishmentDetails = () => {
  const dispatch = useDispatch();
  const accDetails = useSelector((state) => state.accomplishmentDetails.accDetails);

  const handleAddAccomplishment = () => {
    const newAccomplishment = {
      id: Date.now(),
      company: "",
      accomplishment: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    };
    dispatch(addAccomplishmentDetails([...accDetails, newAccomplishment]));
  };

  const handleRemoveAccomplishment = (index) => {
    if (accDetails.length === 1) return;
    const updated = accDetails.filter((_, i) => i !== index);
    dispatch(addAccomplishmentDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...accDetails];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addAccomplishmentDetails(updated));
  };

  return (
    <div className={accStyles.container}>
      <div className={accStyles.headerTitle}>Accomplishments</div>

      <div className={accStyles.accomplishmentBody}>
        {accDetails.map((item, index) => (
          <Collapse
            key={item.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={accStyles.collapseHead}>
                    <div>Accomplishment {index + 1}</div>
                    {index === accDetails.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveAccomplishment(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={accStyles.inputGroup}>
                    <div className={accStyles.inputRow}>
                      <input
                        name="company"
                        placeholder="Company Name"
                        value={item.company}
                        onChange={(e) => handleInputChange(index, "company", e.target.value)}
                      />
                    </div>
                    <div className={accStyles.inputRow}>
                      <input
                        name="accomplishment"
                        placeholder="Your Accomplishment"
                        value={item.accomplishment}
                        onChange={(e) => handleInputChange(index, "accomplishment", e.target.value)}
                      />
                    </div>
                    <div className={accStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={item.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={accStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={item.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={accStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="City"
                        value={item.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={accStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={item.description}
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
        <Button onClick={handleAddAccomplishment}>
          Add Accomplishment
        </Button>
      </div>
    </div>
  );
};

export default AccomplishmentDetails;