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

export type SegmentSearchPropsType = {
  onSearch: (value: string) => void;
};

export type SegmentListItemPropsType = {
  index: number;
  row: Segment;
};

export type SegmentListHeaderTitlePropsType = {
  title: string;
  activeArrow: string | null;
  activeColumn: string | null;
  onSort: (column: string, order: string) => void;
};

export type SegmentListHeaderPropsType = {
  onSort: (column: string, order: string) => void;
};

export type SegmentListPropsType = {
  rows: Segments;
};

export type SegmentFiltersPropsType = {
  options: SelectionOptions;
  onSelectTrack: (value: string) => void;
  onSelectDifficulty: (value: string) => void;
  onSelectFrom: (value: string) => void;
  onSelectTo: (value: string) => void;
};

export type SegmentListItemLinkType = {
  baseUrl: string;
  slug: string;
  name: string;
};
