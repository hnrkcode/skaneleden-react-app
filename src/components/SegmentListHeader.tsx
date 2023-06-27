import { useState } from "react";
import SegmentListHeaderTitle from "./SegmentListHeaderTitle";
import type { SegmentListHeaderPropsType } from "../types/componentTypes";

export default function SegmentListHeader({
  onSort,
}: SegmentListHeaderPropsType) {
  const [activeArrow, setActiveArrow] = useState<string | null>(null);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  function handleClick(column: string, order: string) {
    setActiveColumn(column);
    setActiveArrow(order);
    onSort(column, order);
  }

  const titles = ["Segment", "Track", "Distance", "Difficulty"].map((title) => (
    <SegmentListHeaderTitle
      key={title}
      title={title}
      onSort={handleClick}
      activeArrow={activeArrow}
      activeColumn={activeColumn}
    />
  ));

  return <div className="flex flex-row">{titles}</div>;
}
