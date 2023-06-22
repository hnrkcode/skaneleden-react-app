interface SegmentListHeaderTitleProps {
  title: string;
  onSort: (column: string, order: string) => void;
}

export default function SegmentListHeaderTitle({
  title,
  onSort,
}: SegmentListHeaderTitleProps) {
  return (
    <div className="SegmentHeaderTitle">
      <h2>{title}</h2>
      <div>
        <div className="upArrow" onClick={() => onSort(title, "asc")}>
          &#9650;
        </div>
        <div className="downArrow" onClick={() => onSort(title, "desc")}>
          &#9660;
        </div>
      </div>
    </div>
  );
}
