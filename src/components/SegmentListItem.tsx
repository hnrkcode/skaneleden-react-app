import type { SegmentListItemPropsType } from "../types/componentTypes";
import { convertToKM } from "../utils";

export default function SegmentListItem({
  index,
  row,
}: SegmentListItemPropsType) {
  const distanceInKm = convertToKM(row.distance.toString());
  const difficultyIcons: { [key: string]: string } = {
    "very-easy": "Very easy 😐",
    easy: "Easy 🙂",
    medium: "Medium 😮‍💨",
    hard: "Hard 😵",
  };

  return (
    <div
      key={index}
      className="flex flex-row my-2 p-4 rounded-md border border-gray-300 text-xs tracking-tight md:text-base md:tracking-normal"
    >
      <div className="basis-1/4">
        <a
          href={`https://www.skaneleden.se/etapp/${row.segment.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 visited:text-purple-500 hover:underline"
        >
          {row.segment.name}
        </a>
      </div>
      <div className="basis-1/4">
        <a
          href={`https://www.skaneleden.se/delled/${row.track.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 visited:text-purple-500 hover:underline"
        >
          {row.track.name}
        </a>
      </div>
      <div className="basis-1/4">{distanceInKm}</div>
      <div className="basis-1/4">{difficultyIcons[row.difficulty]}</div>
    </div>
  );
}
