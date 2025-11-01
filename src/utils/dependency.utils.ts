// src/utils/dependency.utils.ts

export interface TaskPosition {
  id: string;
  startX: number;
  endX: number;
  y: number;
}

export interface Dependency {
  from: string;
  to: string;
}

/**
 * Calculates arrow positions for drawing dependency lines.
 * Each dependency is converted into coordinates for DependencyLine.
 */
export const calculateDependencies = (
  tasks: TaskPosition[],
  dependencies: Dependency[]
) => {
  const lines: {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
  }[] = [];

  dependencies.forEach((dep) => {
    const fromTask = tasks.find((t) => t.id === dep.from);
    const toTask = tasks.find((t) => t.id === dep.to);

    if (fromTask && toTask) {
      lines.push({
        fromX: fromTask.endX,
        fromY: fromTask.y,
        toX: toTask.startX,
        toY: toTask.y,
      });
    }
  });

  return lines;
};
