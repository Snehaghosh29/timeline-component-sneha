import React from "react";
import DependencyLine from "./DependencyLine";
import TaskBar from "./TaskBar";
import { calculateDependencies } from "../../utils/dependency.utils";

interface TimelineGridProps {
  tasks: {
    id: string;
    title: string;
    start: string;
    end: string;
    color?: string;
  }[];
  dependencies?: { from: string; to: string }[];
}

const TimelineGrid: React.FC<TimelineGridProps> = ({
  tasks,
  dependencies = [],
}) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-gray-500 text-sm p-4">
        No tasks available to display
      </div>
    );
  }

  const positions = tasks.map((t, index) => ({
    id: t.id,
    startX: index * 160 + 100,
    endX: index * 160 + 250,
    y: index * 60 + 40,
  }));

  const lines = calculateDependencies(positions, dependencies);

  return (
    <div className="relative w-full h-auto bg-gray-50 dark:bg-gray-900 p-6 overflow-x-auto rounded-lg">
      {/* Render all dependency arrows */}
      {lines.map((line, idx) => (
        <DependencyLine key={idx} {...line} />
      ))}

      {/* Render all task bars */}
      {tasks.map((task, index) => (
        <div key={task.id} style={{ position: "absolute", top: positions[index].y }}>
          <TaskBar {...task} />
        </div>
      ))}
    </div>
  );
};

export default TimelineGrid;
