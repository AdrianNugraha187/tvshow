import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchShow } from "../services/apiTvMaze";

export function useTvShow(searchTvShow?: string) {
  return useQuery({
    queryKey: ["tvshow", { tvShow: searchTvShow }],
    queryFn: () => fetchShow(searchTvShow),
    staleTime: 1000 * 60 * 5, // Data dianggap segar selama 5 menit
    gcTime: 1000 * 60 * 10, // Data tidak terpakai disimpan di cache selama 10 menit
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData, // Menahan data lama saat fetching kata kunci baru
  });
}
