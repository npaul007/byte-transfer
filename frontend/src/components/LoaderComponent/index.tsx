import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the loader animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader container
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled component for the loader itself
const Loader = styled.div`
  border: 6px solid #36d7b7; /* Loader color */
  border-top: 6px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite; /* Apply the spin animation */
`;

export const LoaderComponent: React.FC = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};
