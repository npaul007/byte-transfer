// Import necessary libraries
import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DownloadLink = styled.a`
  padding: 10px 20px;
  background-color: #27ae60;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Download: React.FC = () => {
  // Implement logic to retrieve download link
  const downloadLink = "https://example.com/download-link";

  return (
    <Container>
      <h1>Welcome to Byte-Transfer</h1>
      <p>Your file is ready for download!</p>
      <DownloadLink href={downloadLink} download>
        Download File
      </DownloadLink>
    </Container>
  );
};
