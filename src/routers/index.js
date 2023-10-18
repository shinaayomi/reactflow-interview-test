import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstWorkFlowTask from "../layout/FirstWorkFlowTask";
import SecondWorkFlowTask from "../layout/SecondWorkFlowTask";

export default function AppRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstWorkFlowTask />} />
        <Route path="/second" element={<SecondWorkFlowTask />} />
      </Routes>
    </div>
  );
}
