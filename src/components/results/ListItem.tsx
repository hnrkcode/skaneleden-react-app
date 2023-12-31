import Link from "./Link";
import type { ListItemPropsType } from "../../types/componentTypes";
import { convertToKM } from "../../utils";

export default function ListItem({ index, row }: ListItemPropsType) {
  const distanceInKm = convertToKM(row.distance.toString());
  const difficultyIcons: { [key: string]: string } = {
    "very-easy": "Very easy 😐",
    easy: "Easy 🙂",
    medium: "Medium 😮‍💨",
    hard: "Hard 😵",
  };

  const highestPoint = row.elevation && Math.max(...row.elevation);
  const lowestPoint = row.elevation && Math.min(...row.elevation);

  return (
    <div
      key={index}
      className="flex flex-row my-2 p-4 rounded-md border border-gray-300 text-xs tracking-tight md:text-base md:tracking-normal"
    >
      <div className="basis-1/6">
        <Link
          baseUrl={"https://www.skaneleden.se/etapp"}
          slug={row.segment.slug}
          name={row.segment.name}
        />
      </div>
      <div className="basis-1/6">
        <Link
          baseUrl={"https://www.skaneleden.se/delled"}
          slug={row.track.slug}
          name={row.track.name}
        />
      </div>
      <div className="basis-1/6">{distanceInKm}</div>
      <div className="basis-1/6">
        {lowestPoint === null ? "No data" : `${lowestPoint.toFixed(1)} m`}
      </div>
      <div className="basis-1/6">
        {highestPoint === null ? "No data" : `${highestPoint.toFixed(1)} m`}
      </div>
      <div className="basis-1/6">{difficultyIcons[row.difficulty]}</div>
    </div>
  );
}
