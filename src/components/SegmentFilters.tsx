import Select from "./Select";
import type { SegmentFiltersPropsType } from "../types/componentTypes";
import { convertToKM } from "../utils";

export default function SegmentFilters({
  options,
  onSelectTrack,
  onSelectDifficulty,
  onSelectFrom,
  onSelectTo,
}: SegmentFiltersPropsType) {
  const { trackOptions, difficultyOptions, fromOptions, toOptions } = options;

  return (
    <div className="flex flex-row mb-6 justify-between md:justify-start md:gap-2">
      <Select
        name="track"
        defaultValue="All"
        onSelect={onSelectTrack}
        options={trackOptions}
      />
      <Select
        name="difficulty"
        defaultValue="All"
        onSelect={onSelectDifficulty}
        options={difficultyOptions}
        optionFunc={(opt) =>
          `${opt.charAt(0).toUpperCase() + opt.slice(1)}`.replace(/-/g, " ")
        }
      />
      <Select
        name="from"
        defaultValue="0"
        onSelect={onSelectFrom}
        options={fromOptions}
        optionFunc={convertToKM}
      />
      <Select
        name="to"
        defaultValue={Math.max(...toOptions).toString()}
        onSelect={onSelectTo}
        options={toOptions}
        optionFunc={convertToKM}
      />
    </div>
  );
}
