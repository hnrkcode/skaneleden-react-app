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
    <div key={index} className="SegmentItem">
      <div>
        <a
          href={`https://www.skaneleden.se/etapp/${row.segment.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          {row.segment.name}
        </a>
      </div>
      <div>
        <a
          href={`https://www.skaneleden.se/delled/${row.track.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          {row.track.name}
        </a>
      </div>
      <div>{distanceInKm}</div>
      <div>{row.difficulty}</div>
    </div>
  );
}
