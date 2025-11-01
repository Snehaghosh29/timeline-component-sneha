import { useState, useCallback } from "react";

interface DragState {
  isDragging: boolean;
  startX: number;
  offsetX: number;
}

export function useDragAndDrop(onDragEnd?: (offset: number) => void) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    offsetX: 0,
  });

  const startDrag = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragState({ isDragging: true, startX: e.clientX, offsetX: 0 });
  }, []);

  const onDrag = useCallback((e: React.MouseEvent) => {
    if (!dragState.isDragging) return;
    const offset = e.clientX - dragState.startX;
    setDragState((prev) => ({ ...prev, offsetX: offset }));
  }, [dragState.isDragging, dragState.startX]);

  const endDrag = useCallback(() => {
    if (dragState.isDragging && onDragEnd) {
      onDragEnd(dragState.offsetX);
    }
    setDragState({ isDragging: false, startX: 0, offsetX: 0 });
  }, [dragState, onDragEnd]);

  return {
    ...dragState,
    startDrag,
    onDrag,
    endDrag,
  };
}
