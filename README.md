#  Timeline Component System

### Developed by: Sneha Ghosh  
**Technology Stack:** React + TypeScript + Vite + TailwindCSS + Storybook + Framer Motion + Lucide Icons  

---

##  Overview
This project implements a fully interactive **Timeline Component** (Gantt-like view) designed for visualizing tasks, milestones, and dependencies.  
It includes animations, responsive design, hover interactions, and task detail sidebars — built strictly according to the **Timeline View Assignment Specification (PDF)**.

---

##  Features
 Vertical & Horizontal Timeline Modes  
 Color Schemes – Blue / Green / Red  
 TaskBar, TimelineGrid & DependencyLine integration  
 Interactive Sidebar for Task Details  
 Smooth Animations (Framer Motion + CSS)  
 Tooltips, Icons, and Light/Dark Mode Support  
 Storybook with Live Controls and Preview  

---

##  Tech Highlights
- **React + TypeScript:** Component-driven and type-safe.
- **TailwindCSS:** Consistent utility styling and dark mode support.
- **Storybook:** For documentation, preview, and developer handoff.
- **Framer Motion:** For micro-interactions and UI transitions.
- **Lucide Icons:** Clean, modern SVG icons.

---

##  Run Locally
```bash
npm install
npm run dev      # Starts Vite app
npm run storybook  # Opens Storybook UI

 build the production Storybook:

npm run build-storybook

The static build will be located in the /storybook-static directory.