import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstWorkFlow from "../layout/FirstWorkFlow";
import SecondWorkFlow from "../layout/SecondWorkFlow";
import ThirdWorkFlow from "../layout/ThirdWorkFlow";

export default function AppRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstWorkFlow />} />
        <Route path="/second" element={<SecondWorkFlow />} />
        <Route path="/third" element={<ThirdWorkFlow />} />
      </Routes>
    </div>
  );
}
