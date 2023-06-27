import SortingArrow from "./SortingArrow";
import type { HeaderTitlePropsType } from "../../types/componentTypes";

export default function HeaderTitle({
  title,
  activeArrow,
  activeColumn,
  onSort,
}: HeaderTitlePropsType) {
  return (
    <div className="flex flex-row basis-1/4 items-center gap-2 mb-2">
      <h2 className="font-bold">{title}</h2>
      <div className="text-xs leading-3 cursor-pointer select-none">
        <SortingArrow
          activeArrow={activeArrow}
          activeColumn={activeColumn}
          title={title}
          order={"asc"}
          onSort={onSort}
        />
        <SortingArrow
          activeArrow={activeArrow}
          activeColumn={activeColumn}
          title={title}
          order={"desc"}
          onSort={onSort}
        />
      </div>
    </div>
  );
}
