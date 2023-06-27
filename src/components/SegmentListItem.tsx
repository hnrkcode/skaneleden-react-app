import SegmentListItemLink from "./SegmentListItemLink";
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
        <SegmentListItemLink
          baseUrl={"https://www.skaneleden.se/etapp"}
          slug={row.segment.slug}
          name={row.segment.name}
        />
      </div>
      <div className="basis-1/4">
        <SegmentListItemLink
          baseUrl={"https://www.skaneleden.se/delled"}
          slug={row.track.slug}
          name={row.track.name}
        />
      </div>
      <div className="basis-1/4">{distanceInKm}</div>
      <div className="basis-1/4">{difficultyIcons[row.difficulty]}</div>
    </div>
  );
}
