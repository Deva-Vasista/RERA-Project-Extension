import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "./inputTags.css";

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const reasons = ['Floods','Fire','Insufficient Funds','Natural Disaster','BS6 Form Invalidation','Nature Mujaris','BU permission not recieved as per RERA Act',
'BU Permission and Society Registration - both are not recieved']

const suggestions = reasons.map(reson=>{
  return {
    id: reson,
    text: reson
  }
});
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const InputTags = ({ onTagsChange }) => {
  const [tags, setTags] = React.useState([]);

  const handleDelete = (i) => {
    const updatedTags = tags.filter((tag, index) => index !== i);
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  const handleAddition = (tag) => {
    const updatedTags = [...tags, tag];
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  // Function to get the current tags array
  const getTags = () => tags;

  return (
    <div id="tags">
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
        placeholder="State your reasons"
        allowDragDrop={false}
      />
    </div>
  );
};

export default InputTags;
