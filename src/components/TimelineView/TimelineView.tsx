import React, { useState } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { TimelineViewProps, TimelineEvent } from "./TimelineView.types";
import { CheckCircle, Clock, Circle } from "lucide-react";
import { Tooltip } from "react-tooltip";
import TaskDetailSidebar from "./TaskDetailSidebar";

const TimelineView: React.FC<TimelineViewProps> = ({
  events,
  orientation = "vertical",
  variant = "default",
  showIcons = true,
  colorScheme = "blue",
  onEventClick,
}) => {
  const [selectedTask, setSelectedTask] = useState<TimelineEvent | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleTaskClick = (event: TimelineEvent) => {
    setSelectedTask(event);
    setSidebarOpen(true);
    onEventClick?.(event.id);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setSelectedTask(null);
  };

  const colorVariants: Record<string, string> = {
    blue: "text-blue-600 border-blue-400 bg-blue-100 dark:bg-blue-900/30",
    green: "text-green-600 border-green-400 bg-green-100 dark:bg-green-900/30",
    red: "text-red-600 border-red-400 bg-red-100 dark:bg-red-900/30",
  };

  const statusIcon = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={18} />;
      case "in-progress":
        return <Clock size={18} />;
      default:
        return <Circle size={16} />;
    }
  };

  if (!events || events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        No timeline data available
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline list */}
      <div
        className={clsx(
          "flex relative",
          orientation === "vertical"
            ? "flex-col border-l border-gray-300 dark:border-gray-600"
            : "flex-row border-t border-gray-300 dark:border-gray-600 overflow-x-auto",
          "p-4"
        )}
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            onClick={() => handleTaskClick(event)}
            className={clsx(
              "relative cursor-pointer group",
              orientation === "vertical" ? "pl-6 mb-8" : "pt-6 mr-12",
              variant === "outlined"
                ? "border p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                : "",
              "transition-all duration-300 ease-in-out"
            )}
          >
            {/* Connector line */}
            {orientation === "vertical" && index !== events.length - 1 && (
              <span className="absolute top-4 left-1 w-px h-full bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-600 dark:to-gray-700 animate-pulse"></span>
            )}

            {/* Dot / Icon */}
            <span
              data-tooltip-id={`tooltip-${event.id}`}
              className={clsx(
                "absolute flex items-center justify-center w-4 h-4 rounded-full -left-2 border-2 border-white dark:border-gray-800 transition-all",
                colorVariants[colorScheme],
                "group-hover:ring-4 group-hover:ring-opacity-30",
                colorScheme === "blue"
                  ? "group-hover:ring-blue-400"
                  : colorScheme === "green"
                  ? "group-hover:ring-green-400"
                  : "group-hover:ring-red-400"
              )}
            >
              {showIcons && statusIcon(event.status)}
            </span>

            {/* Tooltip */}
            <Tooltip
              id={`tooltip-${event.id}`}
              place="right"
              content={`${event.title} • ${event.status}`}
              style={{
                backgroundColor: "#1f2937",
                color: "#fff",
                fontSize: "12px",
              }}
            />

            {/* Content */}
            <div className="ml-2 animate-fadeIn">
              <time className="block text-sm text-gray-500 dark:text-gray-400">
                {dayjs(event.date).format("MMM DD, YYYY")}
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mt-1">
                {event.title}
              </h3>
              {event.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {event.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Task Detail Sidebar */}
      <TaskDetailSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        task={
          selectedTask
            ? {
                id: selectedTask.id,
                title: selectedTask.title,
                start: selectedTask.date,
                end: selectedTask.end || selectedTask.date,
                status: selectedTask.status,
                description: selectedTask.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default TimelineView;
