import { SegmentListItemLinkType } from "../types/componentTypes";

export default function SegmentListItemLink({
  baseUrl,
  slug,
  name,
}: SegmentListItemLinkType) {
  return (
    <a
      href={`${baseUrl}/${slug}`}
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 hover:text-blue-700 visited:text-purple-500 hover:underline"
    >
      {name}
    </a>
  );
}
