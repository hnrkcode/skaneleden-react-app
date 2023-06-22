interface SegmentListHeaderTitleProps {
  title: string;
  onSort: (column: string, order: string) => void;
}

export default function SegmentListHeaderTitle({
  title,
  onSort,
}: SegmentListHeaderTitleProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div onClick={() => onSort(title, "asc")}>&#9650;</div>
        <div onClick={() => onSort(title, "desc")}>&#9660;</div>
      </div>
    </div>
  );
}
