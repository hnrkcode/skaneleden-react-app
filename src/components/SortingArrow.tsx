interface SortingArrowProps {
  activeArrow: string | null;
  activeColumn: string | null;
  title: string;
  order: string;
  onSort: (column: string, order: string) => void;
}

export default function SortingArrow({
  activeArrow,
  activeColumn,
  title,
  order,
  onSort,
}: SortingArrowProps) {
  const ascArrow = "&#9650;";
  const descArrow = "&#9660;";
  const clickedArrow = order === "asc" ? ascArrow : descArrow;
  const arrowColor =
    activeArrow === order && activeColumn === title
      ? "text-gray-800"
      : "text-gray-400";

  return (
    <div className={arrowColor} onClick={() => onSort(title, order)}>
      <div dangerouslySetInnerHTML={{ __html: clickedArrow }}></div>
    </div>
  );
}
