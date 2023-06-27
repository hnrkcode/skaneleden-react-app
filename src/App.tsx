import segmentData from "./data.json";
import SearchBar from "./components/search/SearchBar";
import SearchFilters from "./components/filters/SearchFilters";
import SearchResultList from "./components/results/SearchResultList";
import { useState } from "react";
import type { Segments, SelectionOptions } from "./types/commonTypes";

function App() {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [trackValue, setTrackValue] = useState<string | null>(null);
  const [difficultyValue, setDifficultyValue] = useState<string | null>(null);
  const [fromValue, setFromValue] = useState<number>(0);
  const [toValue, setToValue] = useState<number>(25000);

  function getOptions(segments: Segments): SelectionOptions {
    const trackOptions = new Set<string>(["All"]);
    const difficultyOptions = new Set<string>(["All"]);
    let maxDistance = 0;

    segments.forEach((segment) => {
      trackOptions.add(segment.track.name);
      difficultyOptions.add(segment.difficulty);
      maxDistance = Math.max(maxDistance, segment.distance);
    });

    const interval = 5000;
    const roundedMaxDistance = Math.ceil(maxDistance / interval) * interval;
    const distanceRange = [];

    for (let i = 0; i < Math.floor(roundedMaxDistance / interval) + 1; i++) {
      distanceRange.push(i * interval);
    }

    const fromOptions = distanceRange.slice(0, -1);
    const toOptions = distanceRange.slice(1);

    return {
      trackOptions: [...trackOptions],
      difficultyOptions: [...difficultyOptions],
      fromOptions,
      toOptions,
    };
  }

  function handleSelectTrack(value: string) {
    setTrackValue(value);
  }

  function handleSelectDifficulty(value: string) {
    setDifficultyValue(value);
  }

  function handleSelectFrom(value: string) {
    const newFromValue = parseInt(value);
    setFromValue(newFromValue);
  }

  function handleSelectTo(value: string) {
    const newToValue = parseInt(value);
    setToValue(newToValue);
  }

  function handleSearch(value: string) {
    setSearchValue(value.toLowerCase());
  }

  const options = getOptions(segmentData);
  let segments = [...segmentData];

  // Filter out segments based on the selected values.
  if (trackValue && trackValue.toLowerCase() !== "all") {
    segments = segmentData.filter(
      (segment) => segment.track.name === trackValue
    );
  }

  if (difficultyValue && difficultyValue.toLowerCase() !== "all") {
    segments = segments.filter(
      (segment) => segment.difficulty === difficultyValue
    );
  }

  if (fromValue <= toValue) {
    segments = segments.filter(
      (segment) => segment.distance >= fromValue && segment.distance <= toValue
    );
  } else {
    segments = [];
  }

  let rows: Segments = [];

  // Filter out segments that isn't matching with the search value.
  if (searchValue) {
    segments.forEach((data) => {
      if (data.segment.name.toLowerCase().search(searchValue) > 0) {
        rows.push(data);
      }
    });
  } else {
    rows = [...segments];
  }

  return (
    <div className="container mx-auto my-2 md:my-16">
      <div className="flex flex-col mx-2">
        <SearchBar onSearch={handleSearch} />
        <SearchFilters
          options={options}
          onSelectTrack={handleSelectTrack}
          onSelectDifficulty={handleSelectDifficulty}
          onSelectFrom={handleSelectFrom}
          onSelectTo={handleSelectTo}
        />
        <SearchResultList rows={rows} />
      </div>
    </div>
  );
}

export default App;
