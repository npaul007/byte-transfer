//fooo
// Import necessary libraries
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { API_HOST } from "../../modules/constants";
import { LoaderComponent } from "../../components";
import { eq, every, get } from "lodash";

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

enum RequestState {
  IDLE,
  PENDING,
  RECEIVED,
  ERROR,
}

export const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [requestState, setRequestState] = useState<RequestState>(
    RequestState.IDLE
  );
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile || "");

      setRequestState(RequestState.PENDING);
      const response = await axios.post(`${API_HOST}upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const fileId = get(response.data, "id", -1);
      if (!eq(fileId, -1)) {
        setDownloadLink(`${window.location.href}download/${fileId}`);
      }

      setRequestState(RequestState.RECEIVED);
    } catch (error) {
      console.error("Error uploading file:", error);
      setRequestState(RequestState.ERROR);
    }
  };

  return (
    <Container>
      <h1>Welcome to Byte-Transfer</h1>
      {!eq(requestState, RequestState.RECEIVED) && (
        <UploadButton>
          Upload File
          <FileInput type="file" onChange={handleFileChange} />
        </UploadButton>
      )}

      {every([
        selectedFile,
        !eq(requestState, RequestState.PENDING),
        !eq(requestState, RequestState.RECEIVED),
      ]) && (
        <div>
          <p>Selected File: {selectedFile?.name}</p>
          <button onClick={handleUpload}>Start Upload</button>
          <br />
        </div>
      )}

      {eq(RequestState.PENDING, requestState) && <LoaderComponent />}

      {every([
        eq(requestState, RequestState.RECEIVED),
        !eq(downloadLink, null),
      ]) && (
        <div>
          <h3>File upload of {selectedFile?.name} successful</h3>
          <a href={downloadLink as string}>Click here to download your file.</a>
          <br />
        </div>
      )}

      {eq(requestState, RequestState.ERROR) && (
        <div>
          <p style={{ color: "red" }}>
            Failed to upload file, please make sure it is less than 1048576
            bytes
          </p>
        </div>
      )}
    </Container>
  );
};
