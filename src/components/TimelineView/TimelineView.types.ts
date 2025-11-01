// src/components/TimelineView/TimelineView.types.ts

export type TimelineEventStatus = "completed" | "in-progress" | "pending";

export interface TimelineEvent {
  id: string;
  title: string;
  date: string; // ISO date
  end?: string; // optional for horizontal Gantt bars
  status: TimelineEventStatus;
  description?: string;
}

export interface TimelineViewProps {
  events: TimelineEvent[];
  orientation?: "vertical" | "horizontal";
  variant?: "default" | "outlined";
  showIcons?: boolean;
  colorScheme?: "blue" | "green" | "red";
  onEventClick?: (id: string) => void;
}
