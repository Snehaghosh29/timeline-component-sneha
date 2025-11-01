import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import { X, CheckCircle, Clock, Circle } from "lucide-react";
import clsx from "clsx";

export interface TaskDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  task?: {
    id: string;
    title: string;
    start: string;
    end: string;
    status: "completed" | "in-progress" | "pending";
    description?: string;
  };
}

const TaskDetailSidebar: React.FC<TaskDetailSidebarProps> = ({
  isOpen,
  onClose,
  task,
}) => {
  if (!task) return null;

  const statusIcon = {
    completed: <CheckCircle className="text-green-500" size={20} />,
    "in-progress": <Clock className="text-yellow-500" size={20} />,
    pending: <Circle className="text-gray-400" size={20} />,
  }[task.status];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 p-6 z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Task Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* Task content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {task.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                {statusIcon}
                <span
                  className={clsx(
                    "capitalize font-medium",
                    task.status === "completed"
                      ? "text-green-600"
                      : task.status === "in-progress"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  )}
                >
                  {task.status}
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong>Start:</strong>{" "}
                {dayjs(task.start).format("MMM DD, YYYY")}
              </p>
              <p>
                <strong>End:</strong> {dayjs(task.end).format("MMM DD, YYYY")}
              </p>
            </div>

            {task.description && (
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                {task.description}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default TaskDetailSidebar;
