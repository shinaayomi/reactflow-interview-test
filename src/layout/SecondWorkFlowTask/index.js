import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

// start nodes
const titleNodes = [
  {
    id: "title1",
    position: { x: 10, y: 28 },
    data: { label: "User Management (Signup, Login)" },
    sourcePosition: "right",
  },
  {
    id: "title2",
    position: { x: 400, y: 20 },
    data: { label: "Project Management (Create, Read,Update, Delete)" },
    targetPosition: "left",
  },
];

const userNodes = [
  {
    id: "1",
    position: { x: 10, y: 100 },
    data: {
      label: "User Signup",
    },
  },
  {
    id: "2",
    position: { x: 10, y: 200 },
    data: {
      label: "User Login",
    },
  },
  {
    id: "3",
    position: { x: 10, y: 300 },
    data: {
      label: "User Profile Update",
    },
  },
];

const projectNodes = [
  {
    id: "4",
    position: { x: 400, y: 100 },
    data: {
      label: "Project (Create)",
    },
  },
  {
    id: "5",
    position: { x: 400, y: 200 },
    data: {
      label: "Project (Update)",
    },
  },
  {
    id: "6",
    position: { x: 400, y: 300 },
    data: {
      label: "Project (Delete)",
    },
  },
];

const initialNodes = [...userNodes, ...projectNodes, ...titleNodes];
// end nodes

// start edges
const titleEdges = [
  {
    id: "e1-5",
    source: "title1",
    target: "title2",
    type: "straight",
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
];

const userEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
];

const projectEdges = [
  {
    id: "e1-3",
    source: "4",
    target: "5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e1-4",
    source: "5",
    target: "6",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
];

const initialEdges = [...titleEdges, ...userEdges, ...projectEdges];
// end edges

export default function SecondWorkFlowTask() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={10} size={1} />
      </ReactFlow>
    </div>
  );
}
