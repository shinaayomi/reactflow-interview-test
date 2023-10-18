import React from "react";
import ReactFlow, {
  isNode,
  getBezierPath,
  getMarkerEnd,
} from "react-flow-renderer";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) => {
  // Logic to calculate the midpoints, or the custom points you want
  // depending on the shared source or target
  let middleX;
  let middleY;

  if (sourceX === targetX) {
    middleX = sourceX;
    middleY = (sourceY + targetY) / 2;
  } else if (sourceY === targetY) {
    middleX = (sourceX + targetX) / 2;
    middleY = sourceY;
  } else {
    middleX = sourceX;
    middleY = targetY;
  }

  const pathOptions = {
    type: data.type,
    sourcePosition,
    targetPosition,
    sourceX,
    sourceY,
    targetX,
    targetY,
    middleX,
    middleY,
  };

  const path = getBezierPath(pathOptions);
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

  return (
    <g>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEnd}
      />
    </g>
  );
};

const flowStyles = { width: "100vw", height: "vh" };

const elements = [
  // ... nodes
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "custom",
    data: { type: "smoothstep" },
  },
  // ... other edges
];

const ThirdWorkFlow = () => (
  <div style={flowStyles}>
    <ReactFlow elements={elements} edgeTypes={{ custom: CustomEdge }} />
  </div>
);

export default ThirdWorkFlow;
