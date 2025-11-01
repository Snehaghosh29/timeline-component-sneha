import type { Meta, StoryObj } from "@storybook/react";
import TimelineView from "./TimelineView";
import type { TimelineEvent, TimelineViewProps } from "./TimelineView.types";

const meta: Meta<typeof TimelineView> = {
  title: "Components/TimelineView",
  component: TimelineView,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TimelineView>;

const mockEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Project Kickoff",
    date: "2025-01-10",
    end: "2025-01-11",
    status: "completed",
    description: "Initial project setup and stakeholder meeting.",
  },
  {
    id: "2",
    title: "Design Phase",
    date: "2025-02-01",
    end: "2025-02-15",
    status: "in-progress",
    description: "UI/UX wireframes and high-fidelity mockups created.",
  },
  {
    id: "3",
    title: "Development Sprint 1",
    date: "2025-03-01",
    end: "2025-03-20",
    status: "pending",
    description: "Implementing frontend and backend for core modules.",
  },
  {
    id: "4",
    title: "Testing & QA",
    date: "2025-04-01",
    end: "2025-04-10",
    status: "pending",
    description: "Comprehensive system testing and bug fixes.",
  },
];

export const Default: Story = {
  args: {
    events: mockEvents,
    orientation: "vertical",
    colorScheme: "blue",
    showIcons: true,
  } as TimelineViewProps,
};

export const Horizontal: Story = {
  args: {
    events: mockEvents,
    orientation: "horizontal",
    colorScheme: "green",
  } as TimelineViewProps,
};

export const OutlinedVariant: Story = {
  args: {
    events: mockEvents,
    variant: "outlined",
    colorScheme: "red",
  } as TimelineViewProps,
};
export const Animated: Story = {
  args: {
    events: [
      {
        id: "1",
        title: "Planning",
        date: "2025-01-02",
        end: "2025-01-04",
        status: "completed",
        description: "Initial phase with planning documents finalized.",
      },
      {
        id: "2",
        title: "Execution",
        date: "2025-02-01",
        end: "2025-02-20",
        status: "in-progress",
        description: "Core development phase ongoing.",
      },
      {
        id: "3",
        title: "Review",
        date: "2025-03-10",
        end: "2025-03-15",
        status: "pending",
        description: "QA and user acceptance testing phase.",
      },
    ],
    orientation: "vertical",
    variant: "outlined",
    colorScheme: "green",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This variant demonstrates animated fade-in transitions and interactive sidebar behavior.",
      },
    },
  },
};
