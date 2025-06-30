import React from "react";
import projStyles from "../styles/projStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProjectDetails } from '../../redux/slices/projectsDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const ProjectsDetails = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectDetails.projects);

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      company: "",
      project: "",
      startDate: "",
      endDate: "",
      city: "",
      description: ""
    };
    dispatch(addProjectDetails([...projects, newProject]));
  };

  const handleRemoveProject = (index) => {
    if (projects.length === 1) return;
    const updated = projects.filter((_, i) => i !== index);
    dispatch(addProjectDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addProjectDetails(updated));
  };

  return (
    <div className={projStyles.container}>
      <div className={projStyles.headerTitle}>Projects</div>

      <div className={projStyles.projectBody}>
        {projects.map((project, index) => (
          <Collapse
            key={project.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={projStyles.collapseHead}>
                    <div>Project {index + 1}</div>
                    {index === projects.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveProject(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={projStyles.inputGroup}>
                    <div className={projStyles.inputRow}>
                      <input
                        name="company"
                        placeholder="Company"
                        value={project.company}
                        onChange={(e) => handleInputChange(index, "company", e.target.value)}
                      />
                    </div>
                    <div className={projStyles.inputRow}>
                      <input
                        name="project"
                        placeholder="Project Name"
                        value={project.project}
                        onChange={(e) => handleInputChange(index, "project", e.target.value)}
                      />
                    </div>
                    <div className={projStyles.inputRow}>
                      <input
                        name="startDate"
                        placeholder="Start Date (MM/YYYY)"
                        value={project.startDate}
                        onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div className={projStyles.inputRow}>
                      <input
                        name="endDate"
                        placeholder="End Date (MM/YYYY)"
                        value={project.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                      />
                    </div>
                    <div className={projStyles.inputRow}>
                      <input
                        name="city"
                        placeholder="City"
                        value={project.city}
                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                      />
                    </div>
                    <div className={projStyles.inputRow}>
                      <textarea
                        placeholder="Description"
                        value={project.description}
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
        <Button onClick={handleAddProject}>
          Add Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectsDetails;