// Interface untuk Rating
interface Rating {
  average: number | null;
}

// Interface untuk Image
interface Image {
  medium: string;
  original: string;
}

// Interface utama untuk Show
export interface Show {
  id: number;
  name: string;
  language: string | null;
  genres: string[];
  status: string;
  rating: Rating;
  image: Image | null;
  summary: string | null;
}

export interface SearchShowResponse {
  score: number;
  show: Show;
}
