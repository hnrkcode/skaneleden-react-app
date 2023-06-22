import { useId } from "react";

interface SegmentFiltersProps {
  onSelectTrack: (value: string) => void;
  onSelectDifficulty: (value: string) => void;
  onSelectFrom: (value: string) => void;
  onSelectTo: (value: string) => void;
}

export default function SegmentFilters({
  onSelectTrack,
  onSelectDifficulty,
  onSelectFrom,
  onSelectTo,
}: SegmentFiltersProps) {
  const trackSelectId = useId();
  const difficultySelectId = useId();
  const fromDistanceSelectId = useId();
  const toDistanceSelectId = useId();

  return (
    <div>
      <div>
        <label htmlFor={trackSelectId}>Track</label>
        <select
          name="track"
          id={trackSelectId}
          defaultValue="all"
          onChange={(event) => onSelectTrack(event.target.value)}
        >
          <option value="all">All</option>
          <option value="SL1 Kust till kust">SL1 Kust till kust</option>
          <option value="SL2 Nord till syd">SL2 Nord till syd</option>
          <option value="SL3 Ås till ås">SL3 Ås till ås</option>
          <option value="SL4 Österlen">SL4 Österlen</option>
          <option value="SL5 Öresund">SL5 Öresund</option>
          <option value="SL6 Vattenriket">SL6 Vattenriket</option>
        </select>
      </div>
      <div>
        <label htmlFor={difficultySelectId}>Difficulty</label>
        <select
          name="trail"
          id={difficultySelectId}
          defaultValue="all"
          onChange={(event) => onSelectDifficulty(event.target.value)}
        >
          <option value="all">All</option>
          <option value="very-easy">Very easy</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label htmlFor={fromDistanceSelectId}>From</label>
        <select
          name="distance-from"
          id={fromDistanceSelectId}
          defaultValue="0"
          onChange={(event) => onSelectFrom(event.target.value)}
        >
          <option value="0">0 km</option>
          <option value="5000">5 km</option>
          <option value="10000">10 km</option>
          <option value="15000">15 km</option>
          <option value="20000">20 km</option>
        </select>
      </div>
      <div>
        <label htmlFor={toDistanceSelectId}>To</label>
        <select
          name="distance-to"
          id={toDistanceSelectId}
          defaultValue="25000"
          onChange={(event) => onSelectTo(event.target.value)}
        >
          <option value="5000">5 km</option>
          <option value="10000">10 km</option>
          <option value="15000">15 km</option>
          <option value="20000">20 km</option>
          <option value="25000">25 km</option>
        </select>
      </div>
    </div>
  );
}
