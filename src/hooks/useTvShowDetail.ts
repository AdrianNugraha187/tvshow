import { useQuery } from "@tanstack/react-query";
import { fetchShowDetail } from "../services/apiTvMaze";

export function useTvShowDetail(id: string) {
  return useQuery({
    queryKey: ["tvshow", id],
    queryFn: () => fetchShowDetail(id),
    enabled: !!id, // Query hanya berjalan jika id ada
    staleTime: 1000 * 60 * 5, // Data disimpan di cache selama 5 menit
  });
}
