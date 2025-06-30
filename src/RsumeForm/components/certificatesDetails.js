import React from "react";
import certStyles from "../styles/certStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCertificateDetails } from '../../redux/slices/certificationsDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const CertificatesDetails = () => {
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.certificateDetails.certificates);

  const handleAddCertificate = () => {
    const newCertificate = {
      id: Date.now(),
      organization: "",
      title: "",
      type: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    dispatch(addCertificateDetails([...certificates, newCertificate]));
  };

  const handleRemoveCertificate = (index) => {
    if (certificates.length === 1) return;
    const updated = certificates.filter((_, i) => i !== index);
    dispatch(addCertificateDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...certificates];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addCertificateDetails(updated));
  };

  return (
    <div className={certStyles.container}>
      <div className={certStyles.headerTitle}>Certificates</div>

      <div className={certStyles.certificateBody}>
        {certificates.map((cert, index) => (
          <Collapse
            key={cert.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={certStyles.collapseHead}>
                    <div>Certificate {index + 1}</div>
                    {index === certificates.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveCertificate(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={certStyles.inputGroup}>
                    <div className={certStyles.inputRow}>
                      <input
                        name="organization"
                        placeholder="Organization"
                        value={cert.organization}
                        onChange={(e) => handleInputChange(index, "organization", e.target.value)}
                      />
                    </div>
                    <div className={certStyles.inputRow}>
                      <input
                        name="title"
                        placeholder="Title"
                        value={cert.title}
                        onChange={(e) => handleInputChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div className={certStyles.inputRow}>
                      <input
                        name="type"
                        placeholder="Type"
                        value={cert.type}
                        onChange={(e) => handleInputChange(index, "type", e.target.value)}
                      />
                    </div>
                    <div className={certStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={cert.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={certStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={cert.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={certStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={cert.description}
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
        <Button onClick={handleAddCertificate}>
          Add Certificate
        </Button>
      </div>
    </div>
  );
};

export default CertificatesDetails;