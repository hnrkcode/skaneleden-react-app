interface Segment {
  segment: {
    name: string;
    slug: string;
  };
  track: {
    name: string;
    slug: string;
  };
  distance: number;
  difficulty: string;
}

interface SegmentListItemProps {
  index: number;
  row: Segment;
}

export default function SegmentListItem({ index, row }: SegmentListItemProps) {
  const distanceInKm = `${row.distance / 1000} km`;

  return (
    <div key={index} className="flex flex-row">
      <div className="basis-1/4">
        <a
          href={`https://www.skaneleden.se/etapp/${row.segment.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 visited:text-purple-500 underline"
        >
          {row.segment.name}
        </a>
      </div>
      <div className="basis-1/4">
        <a
          href={`https://www.skaneleden.se/delled/${row.track.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 visited:text-purple-500 underline"
        >
          {row.track.name}
        </a>
      </div>
      <div className="basis-1/4">{distanceInKm}</div>
      <div className="basis-1/4">{row.difficulty}</div>
    </div>
  );
}
