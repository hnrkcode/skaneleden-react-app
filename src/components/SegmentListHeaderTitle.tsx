import SortingArrow from "./SortingArrow";

interface SegmentListHeaderTitleProps {
  title: string;
  activeArrow: string | null;
  activeColumn: string | null;
  onSort: (column: string, order: string) => void;
}

export default function SegmentListHeaderTitle({
  title,
  activeArrow,
  activeColumn,
  onSort,
}: SegmentListHeaderTitleProps) {
  return (
    <div className="flex flex-row basis-1/4 items-center gap-2 mb-2">
      <h2 className="font-bold">{title}</h2>
      <div className="text-xs leading-3 cursor-pointer select-none">
        <SortingArrow
          activeArrow={activeArrow}
          activeColumn={activeColumn}
          title={title}
          order={"asc"}
          onSort={onSort}
        />
        <SortingArrow
          activeArrow={activeArrow}
          activeColumn={activeColumn}
          title={title}
          order={"desc"}
          onSort={onSort}
        />
      </div>
    </div>
  );
}
