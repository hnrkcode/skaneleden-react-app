interface SegmentSearchProps {
  onSearch: (value: string) => void;
}

export default function SegmentSearch({ onSearch }: SegmentSearchProps) {
  return (
    <input type="text" onChange={(event) => onSearch(event.target.value)} />
  );
}
