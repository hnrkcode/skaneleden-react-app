import { useState, useEffect } from "react";
import SegmentListHeader from "./SegmentListHeader";
import SegmentListItem from "./SegmentListItem";
import { compareName, compareDifficulty, compareDistance } from "../utils";
import type { SegmentListPropsType } from "../types/componentTypes";
import type { Segments } from "../types/commonTypes";

export default function SegmentList({ rows }: SegmentListPropsType) {
  const [items, setItems] = useState<Segments>([]);

  useEffect(() => {
    setItems(rows);
  }, [rows]);

  function handleSort(column: string, order: string) {
    let sortedItems: Segments = [];

    if (column === "Segment") {
      sortedItems = [...items].sort((a, b) =>
        compareName(a.segment.name, b.segment.name, order)
      );
    } else if (column === "Track") {
      sortedItems = [...items].sort((a, b) =>
        compareName(a.track.name, b.track.name, order)
      );
    } else if (column === "Distance") {
      sortedItems = [...items].sort((a, b) =>
        compareDistance(a.distance, b.distance, order)
      );
    } else if (column === "Difficulty") {
      sortedItems = [...items].sort((a, b) =>
        compareDifficulty(a.difficulty, b.difficulty, order)
      );
    }

    setItems(sortedItems);
  }

  const renderedItems = items.map((row, index) => (
    <SegmentListItem key={index} index={index} row={row} />
  ));

  return (
    <div className="flex flex-col">
      <SegmentListHeader onSort={handleSort} />
      {renderedItems}
    </div>
  );
}
