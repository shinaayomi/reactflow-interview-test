import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 100, y: 60 }, data: { label: "A" } },
  { id: "2", position: { x: 600, y: 60 }, data: { label: "B" } },
  { id: "3", position: { x: 100, y: 190 }, data: { label: "C" } },
  { id: "4", position: { x: 600, y: 190 }, data: { label: "D" } },
  { id: "5", position: { x: 100, y: 320 }, data: { label: "E" } },
  { id: "7", position: { x: 600, y: 320 }, data: { label: "F" } },
  { id: "9", position: { x: 100, y: 450 }, data: { label: "G" } },
  { id: "11", position: { x: 600, y: 450 }, data: { label: "H" } },
];
const initialEdges = [{ id: "e1-2", type: "step", source: "1", target: "2" }];

export default function SecondWorkFlowTask() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Controls />
        <MiniMap />
        <Background variant="lines" gap={10} size={1} />
      </ReactFlow>
    </div>
  );
}
