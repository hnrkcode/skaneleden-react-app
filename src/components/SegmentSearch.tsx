interface SegmentSearchProps {
  onSearch: (value: string) => void;
}

export default function SegmentSearch({ onSearch }: SegmentSearchProps) {
  return (
    <div className="SegmentSearch">
      <input
        className="SearchBar"
        type="text"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
