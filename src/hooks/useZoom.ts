import { useState, useCallback } from "react";

export function useZoom(initialScale = 1, min = 0.5, max = 3, step = 0.1) {
  const [scale, setScale] = useState(initialScale);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + step, max));
  }, [step, max]);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - step, min));
  }, [step, min]);

  const resetZoom = useCallback(() => {
    setScale(initialScale);
  }, [initialScale]);

  return { scale, zoomIn, zoomOut, resetZoom, setScale };
}
