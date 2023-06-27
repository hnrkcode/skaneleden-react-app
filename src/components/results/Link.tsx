import { LinkType } from "../../types/componentTypes";

export default function Link({ baseUrl, slug, name }: LinkType) {
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
