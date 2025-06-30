import React from "react";
import langStyles from "../styles/langStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addLanguagesDetails } from "../../redux/slices/languagesDetailsSlice";
//import { DeleteOutlined } from "@ant-design/icons";
import { Button} from "antd";

const LanguagesDetails = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languagesDetails.languages);
  const [newLanguage, setNewLanguage] = React.useState("");

  const handleAddLanguage = () => {
    if (newLanguage.trim() === "") return;
    dispatch(addLanguagesDetails([...languages, newLanguage]));
    setNewLanguage("");
  };

  // const handleRemoveLanguage = (index) => {
  //   const updated = languages.filter((_, i) => i !== index);
  //   dispatch(addLanguagesDetails(updated));
  // };

  return (
    <div className={langStyles.container}>
      <div className={langStyles.headerTitle}>Languages</div>

      <div className={langStyles.langBody}>
        {/* <div className={langStyles.langList}>
          {languages.map((language, index) => (
            <Tag
              key={index}
              closable
              onClose={() => handleRemoveLanguage(index)}
              className={langStyles.langTag}
            >
              {language}
            </Tag>
          ))}
        </div> */}

        <div className={langStyles.addLangContainer}>
          <input
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="Add new language"
            onKeyPress={(e) => e.key === "Enter" && handleAddLanguage()}
          />
          <Button onClick={handleAddLanguage}>Add Language</Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesDetails;