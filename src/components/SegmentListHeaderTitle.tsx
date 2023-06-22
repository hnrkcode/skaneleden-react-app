interface SegmentListHeaderTitleProps {
  title: string;
  onSort: (column: string, order: string) => void;
}

export default function SegmentListHeaderTitle({
  title,
  onSort,
}: SegmentListHeaderTitleProps) {
  return (
    <div className="flex flex-row basis-1/4 items-center gap-2">
      <h2 className="font-bold mb-2">{title}</h2>
      <div className="text-xs leading-3 cursor-pointer select-none">
        <div onClick={() => onSort(title, "asc")}>&#9650;</div>
        <div onClick={() => onSort(title, "desc")}>&#9660;</div>
      </div>
    </div>
  );
}
