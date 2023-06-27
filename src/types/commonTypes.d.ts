export type Segment = {
  segment: {
    name: string;
    slug: string;
  };
  track: {
    name: string;
    slug: string;
  };
  distance: number;
  difficulty: string;
};

export type Segments = Segment[];

export type SelectionOptions = {
  trackOptions: string[];
  difficultyOptions: string[];
  fromOptions: number[];
  toOptions: number[];
};

export type Difficulty = "very-easy" | "easy" | "medium" | "hard";
