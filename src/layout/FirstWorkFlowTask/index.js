import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";

// start nodes
const firstInitialNodes = [
  {
    id: "1",
    position: { x: 10, y: 60 },
    data: { label: "A" },
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 400, y: 60 },
    data: { label: "B" },
    sourcePosition: "left",
  },
  { id: "3", position: { x: 10, y: 190 }, data: { label: "C" } },
  { id: "4", position: { x: 400, y: 190 }, data: { label: "D" } },
  {
    id: "5",
    position: { x: 10, y: 320 },
    data: { label: "E" },
    sourcePosition: "right",
    targetPosition: "right",
  },
  { id: "6", position: { x: 400, y: 320 }, data: { label: "F" } },
  { id: "7", position: { x: 10, y: 450 }, data: { label: "G" } },
  {
    id: "8",
    position: { x: 400, y: 450 },
    data: { label: "H" },
    targetPosition: "left",
  },
];

const secondInitialnodes = [
  {
    id: "9",
    position: { x: 710, y: 60 },
    data: { label: "A" },
    sourcePosition: "right",
  },
  { id: "10", position: { x: 1100, y: 60 }, data: { label: "B" } },
  {
    id: "11",
    position: { x: 710, y: 190 },
    data: { label: "C" },
    targetPosition: "right",
  },
  { id: "12", position: { x: 1100, y: 190 }, data: { label: "D" } },
  { id: "13", position: { x: 710, y: 320 }, data: { label: "E" } },
  { id: "14", position: { x: 1100, y: 320 }, data: { label: "F" } },
  { id: "15", position: { x: 710, y: 450 }, data: { label: "G" } },
  {
    id: "16",
    position: { x: 1100, y: 450 },
    data: { label: "H" },
    sourcePosition: "left",
    targetPosition: "left",
  },
];

const initialNodes = [...firstInitialNodes, ...secondInitialnodes];
// end nodes

// start edges
const firstEdges = [
  {
    id: "e1-2",
    type: "step",
    source: "2",
    target: "5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#dfa348",
    },
    style: {
      strokeWidth: 2,
      stroke: "#dfa348",
    },
  },
  {
    id: "e1-3",
    type: "step",
    source: "5",
    target: "8",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#dfa348",
    },
    style: {
      strokeWidth: 2,
      stroke: "#dfa348",
    },
  },
];

const secondEdges = [
  {
    id: "e1-4",
    type: "step",
    source: "9",
    target: "16",
    style: {
      strokeWidth: 2,
      stroke: "#FF0072",
    },
  },
  {
    id: "e1-5",
    type: "step",
    source: "16",
    target: "11",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#FF0072",
    },
    style: {
      strokeWidth: 2,
      stroke: "#FF0072",
    },
  },
];

const initialEdges = [...firstEdges, ...secondEdges];
// end edges

export default function FirstWorkFlowTask() {
  const [nodes1, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactFlow
        nodes={nodes1}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="lines" gap={10} size={1} />
      </ReactFlow>
    </div>
  );
}
