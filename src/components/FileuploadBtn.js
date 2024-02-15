import React, { useState } from 'react';
import axios from 'axios';

const FileUploadButton = (data) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:3001/api/upload', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle errors as needed
    }
  };

  return (
    <div>
      <input  type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUploadButton;
