export interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

export interface CreditsResponese {
  cast: Cast[];
  results: Cast[];
}
