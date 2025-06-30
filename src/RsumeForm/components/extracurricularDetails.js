import React from "react";
import extraStyles from "../styles/expStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addExtraDetails } from "../../redux/slices/extraDetailsSlice";
//import { DeleteOutlined } from "@ant-design/icons";
import { Button} from "antd";

const ExtraCurricularDetails = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.extraDetails.activities);
  const [newActivity, setNewActivity] = React.useState("");

  const handleAddActivity = () => {
    if (newActivity.trim() === "") return;
    dispatch(addExtraDetails([...activities, newActivity]));
    setNewActivity("");
  };

  // const handleRemoveActivity = (index) => {
  //   const updated = activities.filter((_, i) => i !== index);
  //   dispatch(addExtraDetails(updated));
  // };

  return (
    <div className={extraStyles.container}>
      <div className={extraStyles.headerTitle}>Extra Curricular Activities</div>

      <div className={extraStyles.extraBody}>
        {/* <div className={extraStyles.extraList}>
          {activities.map((activity, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleRemoveActivity(index)}
              className={extraStyles.extraTag}
            >
              {activity}
            </Tag>
          ))}
        </div> */}

        <div className={extraStyles.addExtraContainer}>
          <input
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            placeholder="Add new activity"
            onKeyPress={(e) => e.key === "Enter" && handleAddActivity()}
          />
          <Button onClick={handleAddActivity}>Add Activity</Button>
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularDetails;