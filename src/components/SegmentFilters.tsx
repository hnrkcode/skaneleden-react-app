import { useId } from "react";

interface Options {
  trackOptions: string[];
  difficultyOptions: string[];
  fromOptions: number[];
  toOptions: number[];
}
interface SegmentFiltersProps {
  options: Options;
  onSelectTrack: (value: string) => void;
  onSelectDifficulty: (value: string) => void;
  onSelectFrom: (value: string) => void;
  onSelectTo: (value: string) => void;
}

export default function SegmentFilters({
  options,
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
    <div className="flex flex-row mb-6 justify-between md:justify-start md:gap-2">
      <div>
        <label htmlFor={trackSelectId}>Track</label>
        <select
          name="track"
          id={trackSelectId}
          defaultValue="all"
          onChange={(event) => onSelectTrack(event.target.value)}
          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        >
          {options.trackOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor={difficultySelectId}>Difficulty</label>
        <select
          name="trail"
          id={difficultySelectId}
          defaultValue="all"
          onChange={(event) => onSelectDifficulty(event.target.value)}
          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        >
          {options.difficultyOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {`${option.charAt(0).toUpperCase() + option.slice(1)}`.replace(
                  /-/g,
                  " "
                )}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor={fromDistanceSelectId}>From</label>
        <select
          name="distance-from"
          id={fromDistanceSelectId}
          defaultValue="0"
          onChange={(event) => onSelectFrom(event.target.value)}
          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        >
          {options.fromOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {`${option / 1000} km`}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor={toDistanceSelectId}>To</label>
        <select
          name="distance-to"
          id={toDistanceSelectId}
          defaultValue="25000"
          onChange={(event) => onSelectTo(event.target.value)}
          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
        >
          {options.toOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {`${option / 1000} km`}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
