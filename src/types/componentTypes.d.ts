import { Segment, Segments, SelectionOptions } from "./commonTypes";

export type SortingArrowPropsType = {
  activeArrow: string | null;
  activeColumn: string | null;
  title: string;
  order: string;
  onSort: (column: string, order: string) => void;
};

export type SelectPropsType = {
  name: string;
  defaultValue: string;
  onSelect: (value: string) => void;
  options: string[] | number[];
  optionFunc?: (value: string) => string;
};

export type SearchBarPropsType = {
  onSearch: (value: string) => void;
};

export type ListItemPropsType = {
  index: number;
  row: Segment;
};

export type HeaderTitlePropsType = {
  title: string;
  activeArrow: string | null;
  activeColumn: string | null;
  onSort: (column: string, order: string) => void;
};

export type HeadersPropsType = {
  onSort: (column: string, order: string) => void;
};

export type SearchResultListPropsType = {
  rows: Segments;
};

export type SearchFiltersPropsType = {
  options: SelectionOptions;
  onSelectTrack: (value: string) => void;
  onSelectDifficulty: (value: string) => void;
  onSelectFrom: (value: string) => void;
  onSelectTo: (value: string) => void;
};

export type LinkType = {
  baseUrl: string;
  slug: string;
  name: string;
};
