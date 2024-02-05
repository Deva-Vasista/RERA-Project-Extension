import React, { useRef } from 'react';

const FileUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file, such as uploading it to a server or processing it
    console.log('Selected file:', selectedFile);
  };

  return (
    <div>
      <button className="file-btn" onClick={handleButtonClick}>
        File upload
      </button>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploadButton;