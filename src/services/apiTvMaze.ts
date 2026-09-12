import type { SearchShowResponse, Show } from "../types/tvShowType";

export async function fetchShow(searchTvShow?: string): Promise<Show[]> {
  const url = searchTvShow
    ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTvShow)}`
    : `https://api.tvmaze.com/shows?page=0`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP Error! ${res.status} ${res.statusText}`);
  }
  const data = await res.json();

  if (searchTvShow) {
    return (data as SearchShowResponse[]).map((item) => item.show);
  }

  return data as Show[];
}
