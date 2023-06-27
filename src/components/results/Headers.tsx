import { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import type { HeadersPropsType } from "../../types/componentTypes";

export default function Headers({ onSort }: HeadersPropsType) {
  const [activeArrow, setActiveArrow] = useState<string | null>(null);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  function handleClick(column: string, order: string) {
    setActiveColumn(column);
    setActiveArrow(order);
    onSort(column, order);
  }

  const titles = ["Segment", "Track", "Distance", "Difficulty"].map((title) => (
    <HeaderTitle
      key={title}
      title={title}
      onSort={handleClick}
      activeArrow={activeArrow}
      activeColumn={activeColumn}
    />
  ));

  return <div className="flex flex-row">{titles}</div>;
}
