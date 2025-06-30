import React from "react";
import hobbyStyles from "../styles/hobbyStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addHobbiesDetails } from "../../redux/slices/hobbiesDetailsSlice";
//import { DeleteOutlined } from "@ant-design/icons";
import { Button} from "antd";

const HobbiesDetails = () => {
  const dispatch = useDispatch();
  const hobbies = useSelector((state) => state.hobbiesDetails.hobbies);
  const [newHobby, setNewHobby] = React.useState("");

  const handleAddHobby = () => {
    if (newHobby.trim() === "") return;
    dispatch(addHobbiesDetails([...hobbies, newHobby]));
    setNewHobby("");
  };

  // const handleRemoveHobby = (index) => {
  //   const updated = hobbies.filter((_, i) => i !== index);
  //   dispatch(addHobbiesDetails(updated));
  // };

  return (
    <div className={hobbyStyles.container}>
      <div className={hobbyStyles.headerTitle}>Hobbies</div>

      <div className={hobbyStyles.hobbyBody}>
        {/* <div className={hobbyStyles.hobbyList}>
          {hobbies.map((hobby, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleRemoveHobby(index)}
              className={hobbyStyles.hobbyTag}
            >
              {hobby}
            </Tag>
          ))}
        </div> */}

        <div className={hobbyStyles.addHobbyContainer}>
          <input
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            placeholder="Add new hobby"
            onKeyPress={(e) => e.key === "Enter" && handleAddHobby()} 
          />
          <Button onClick={handleAddHobby}>Add Hobby</Button>
        </div>
      </div>
    </div>
  );
};

export default HobbiesDetails;