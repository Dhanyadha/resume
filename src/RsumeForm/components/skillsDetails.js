import React from "react";
import skillsStyles from "../styles/skillStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addSkillsDetails } from "../../redux/slices/skillDetailsSlice";
//import { DeleteOutlined } from "@ant-design/icons";
import { Button} from "antd";

const SkillsDetails = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skillsDetails.skills);
  const [newSkill, setNewSkill] = React.useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return;
    dispatch(addSkillsDetails([...skills, newSkill]));
    setNewSkill("");
  };

  // const handleRemoveSkill = (index) => {
  //   const updated = skills.filter((_, i) => i !== index);
  //   dispatch(addSkillsDetails(updated));
  // };

  return (
    <div className={skillsStyles.container}>
      <div className={skillsStyles.headerTitle}>Skills</div>

      <div className={skillsStyles.skillsBody}>
        {/* <div className={skillsStyles.skillsList}>
          {skills.map((skill, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleRemoveSkill(index)}
              className={skillsStyles.skillTag}
            >
              {skill}
            </Tag>
          ))}
        </div> */}

        <div className={skillsStyles.addSkillContainer}>
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add new skill"
            onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
          />
          <Button onClick={handleAddSkill}>Add Skill</Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;