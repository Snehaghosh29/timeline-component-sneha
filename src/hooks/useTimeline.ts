import { useState } from "react";

export const useTimeline = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [scrollX, setScrollX] = useState(0);

  const zoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2));
  const zoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.5));
  const reset = () => {
    setZoomLevel(1);
    setScrollX(0);
  };

  return { zoomLevel, scrollX, zoomIn, zoomOut, reset };
};
