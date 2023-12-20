import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Download, HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download/:fileId" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
