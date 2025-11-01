import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";

interface TaskBarProps {
  id: string;
  title: string;
  start: string; // ISO date
  end: string;   // ISO date
  color?: string;
  onClick?: (id: string) => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ id, title, start, end, color = "blue", onClick }) => {
  // Calculate duration and positioning
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const duration = endDate.diff(startDate, "day") + 1;

  return (
    <div
      className={clsx(
        "relative flex items-center justify-between rounded-md text-white text-sm cursor-pointer select-none",
        {
          "bg-blue-500 hover:bg-blue-600": color === "blue",
          "bg-green-500 hover:bg-green-600": color === "green",
          "bg-red-500 hover:bg-red-600": color === "red",
        }
      )}
      style={{
        width: `${duration * 80}px`, // width per day (adjustable)
        minWidth: "60px",
        marginLeft: `${startDate.date() * 2}px`, // offset simulation
        height: "28px",
        transition: "all 0.3s ease",
      }}
      onClick={() => onClick?.(id)}
    >
      <span className="pl-2 truncate">{title}</span>
      <span className="pr-2 text-xs opacity-80">{duration}d</span>
    </div>
  );
};

export default TaskBar;
