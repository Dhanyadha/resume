import React from "react";
import volStyles from "../styles/VolStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addVolunteeringDetails } from '../../redux/slices/volunteeringDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const VolunteeringsDetails = () => {
  const dispatch = useDispatch();
  const volunteerings = useSelector((state) => state.volunteeringDetails.volunteerings);

  const handleAddVolunteering = () => {
    const newVolunteering = {
      id: Date.now(),
      organization: "",
      role: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    };
    dispatch(addVolunteeringDetails([...volunteerings, newVolunteering]));
  };

  const handleRemoveVolunteering = (index) => {
    if (volunteerings.length === 1) return;
    const updated = volunteerings.filter((_, i) => i !== index);
    dispatch(addVolunteeringDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...volunteerings];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addVolunteeringDetails(updated));
  };

  return (
    <div className={volStyles.container}>
      <div className={volStyles.headerTitle}>Volunteering</div>

      <div className={volStyles.volunteeringBody}>
        {volunteerings.map((volunteering, index) => (
          <Collapse
            key={volunteering.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={volStyles.collapseHead}>
                    <div>Volunteering {index + 1}</div>
                    {index === volunteerings.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveVolunteering(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={volStyles.inputGroup}>
                    <div className={volStyles.inputRow}>
                      <input
                        name="organization"
                        placeholder="Organization"
                        value={volunteering.organization}
                        onChange={(e) => handleInputChange(index, "organization", e.target.value)}
                      />
                    </div>
                    <div className={volStyles.inputRow}>
                      <input
                        name="role"
                        placeholder="Role/Position"
                        value={volunteering.role}
                        onChange={(e) => handleInputChange(index, "role", e.target.value)}
                      />
                    </div>
                    <div className={volStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={volunteering.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={volStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={volunteering.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={volStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="City"
                        value={volunteering.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={volStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={volunteering.description}
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
        <Button onClick={handleAddVolunteering}>
          Add Volunteering
        </Button>
      </div>
    </div>
  );
};

export default VolunteeringsDetails;