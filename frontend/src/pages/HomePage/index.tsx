//fooo
// Import necessary libraries
import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UploadButton = styled.label`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

export const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("File uploaded:", selectedFile);
    // Implement cloud upload logic and state management
  };

  return (
    <Container>
      <h1>Welcome to Byte-Transfer</h1>
      <UploadButton>
        Upload File
        <FileInput type="file" onChange={handleFileChange} />
      </UploadButton>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload}>Start Upload</button>
        </div>
      )}
    </Container>
  );
};
