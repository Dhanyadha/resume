import React from "react";
import linkStyles from "../styles/linksStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addLinkDetails } from '../../redux/slices/linksDetailsSlice';
import { DeleteOutlined } from "@ant-design/icons";
import { Collapse, Button } from "antd";

const LinksDetails = () => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.linkDetails.links);

  const handleAddLink = () => {
    const newLink = {
      id: Date.now(),
      title: "",
      link: ""
    };
    dispatch(addLinkDetails([...links, newLink]));
  };

  const handleRemoveLink = (index) => {
    if (links.length === 1) return;
    const updated = links.filter((_, i) => i !== index);
    dispatch(addLinkDetails(updated));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...links];
    updated[index] = { ...updated[index], [field]: value };
    dispatch(addLinkDetails(updated));
  };

  return (
    <div className={linkStyles.container}>
      <div className={linkStyles.headerTitle}>Links</div>

      <div className={linkStyles.linkBody}>
        {links.map((item, index) => (
          <Collapse
            key={item.id}
            collapsible="header"
            items={[
              {
                key: index,
                label: (
                  <div className={linkStyles.collapseHead}>
                    <div>Link {index + 1}</div>
                    {index === links.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveLink(index);
                        }}
                      >
                        <DeleteOutlined />
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div className={linkStyles.inputGroup}>
                    <div className={linkStyles.inputRow}>
                      <input
                        name="title"
                        placeholder="Title (e.g., GitHub)"
                        value={item.title}
                        onChange={(e) => handleInputChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div className={linkStyles.inputRow}>
                      <input
                        name="link"
                        placeholder="URL"
                        value={item.link}
                        onChange={(e) => handleInputChange(index, "link", e.target.value)}
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        ))}

        <br />
        <Button onClick={handleAddLink}>
          Add Link
        </Button>
      </div>
    </div>
  );
};

export default LinksDetails;