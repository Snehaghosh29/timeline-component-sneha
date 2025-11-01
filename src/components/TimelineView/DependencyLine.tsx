import React from "react";
import clsx from "clsx";

export interface DependencyLineProps {
  fromX: number; // starting X coordinate
  fromY: number; // starting Y coordinate
  toX: number;   // ending X coordinate
  toY: number;   // ending Y coordinate
  color?: string;
  dashed?: boolean;
}

/**
 * Draws an SVG arrow or connector line between two task bars
 * Used to show task dependencies in the timeline grid
 */
const DependencyLine: React.FC<DependencyLineProps> = ({
  fromX,
  fromY,
  toX,
  toY,
  color = "#2563eb", // Tailwind blue-600
  dashed = false,
}) => {
  // Arrow path (a nice cubic curve)
  const midX = (fromX + toX) / 2;
  const path = `M${fromX},${fromY} C${midX},${fromY} ${midX},${toY} ${toX},${toY}`;

  return (
    <svg
      className="absolute overflow-visible pointer-events-none"
      style={{ left: 0, top: 0 }}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeDasharray={dashed ? "5,5" : undefined}
        className={clsx("transition-all duration-300")}
      />
      {/* Small arrow head */}
      <polygon
        points={`${toX - 4},${toY - 4} ${toX},${toY} ${toX - 4},${toY + 4}`}
        fill={color}
      />
    </svg>
  );
};

export default DependencyLine;
