import { useState, useEffect } from "react";
import SegmentListHeader from "./SegmentListHeader";
import SegmentListItem from "./SegmentListItem";
import type { SegmentListPropsType } from "../types/componentTypes";
import type { Segments, Difficulty } from "../types/commonTypes";

export default function SegmentList({ rows }: SegmentListPropsType) {
  const [items, setItems] = useState<Segments>([]);

  useEffect(() => {
    setItems(rows);
  }, [rows]);

  function handleSort(column: string, order: string) {
    let sortedItems: Segments = [];

    if (column === "Segment") {
      sortedItems = [...items].sort((a, b) => {
        const nameA = a.segment.name.toLowerCase();
        const nameB = b.segment.name.toLowerCase();

        if (nameA < nameB) {
          return order === "asc" ? -1 : 1;
        }

        if (nameA > nameB) {
          return order === "asc" ? 1 : -1;
        }

        return 0;
      });
    } else if (column === "Track") {
      sortedItems = [...items].sort((a, b) => {
        const nameA = a.track.name.toLowerCase();
        const nameB = b.track.name.toLowerCase();

        if (nameA < nameB) {
          return order === "asc" ? -1 : 1;
        }

        if (nameA > nameB) {
          return order === "asc" ? 1 : -1;
        }

        return 0;
      });
    } else if (column === "Distance") {
      sortedItems = [...items].sort((a, b) => {
        if (order === "asc") {
          return a.distance - b.distance;
        } else {
          return b.distance - a.distance;
        }
      });
    } else if (column === "Difficulty") {
      sortedItems = [...items].sort((a, b) => {
        const difficulties: Record<Difficulty, number> = {
          "very-easy": 0,
          easy: 1,
          medium: 2,
          hard: 3,
        };
        const nameA = a.difficulty.toLowerCase() as Difficulty;
        const nameB = b.difficulty.toLowerCase() as Difficulty;

        if (order === "asc") {
          return difficulties[nameA] - difficulties[nameB];
        } else {
          return difficulties[nameB] - difficulties[nameA];
        }
      });
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
