import { useQuery } from "@tanstack/react-query";
import { fetchShow } from "../services/apiTvMaze";

export function useTvShow(searchTvShow?: string) {
  return useQuery({
    queryKey: ["tvshow", { tvShow: searchTvShow }],
    queryFn: () => fetchShow(searchTvShow),
  });
}
