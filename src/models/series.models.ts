export interface Serie {
  id: number;
  name: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  popularity: number;
  overview?: string;
}

export interface AnimationResponese {
  results: Serie[];
}
export interface FamilyResponse {
  results: Serie[];
}
export interface PopularResponse {
  results: Serie[];
}
export interface WesternResponse {
  results: Serie[];
}
export interface SearchResponse {
  results: Serie[];
}
