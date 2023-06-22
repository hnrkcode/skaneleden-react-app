import SegmentListHeaderTitle from "./SegmentListHeaderTitle";

interface SegmentListHeaderProps {
  onSort: (column: string, order: string) => void;
}

export default function SegmentListHeader({ onSort }: SegmentListHeaderProps) {
  const titles = ["Segment", "Track", "Distance", "Difficulty"].map((title) => (
    <SegmentListHeaderTitle key={title} title={title} onSort={onSort} />
  ));

  return <div className="flex flex-row px-4">{titles}</div>;
}
