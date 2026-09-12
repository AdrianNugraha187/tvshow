import type { Show } from "../../types/tvShowType";

interface CardProps {
  show: Show;
  onFavorite: (show: Show) => void;
  isFavorite?: boolean; // Opsional: jika ingin menandai status favorit aktif
}

export default function TvShowCard({
  show,
  onFavorite,
  isFavorite = false,
}: CardProps) {
  // Membersihkan tag HTML dari summary TVmaze (misal: <p>...</p>)
  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>?/gm, "").trim()
    : "Sinopsis belum tersedia.";

  // Menentukan warna badge berdasarkan status serial
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "running":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "ended":
        return "bg-zinc-700/40 text-zinc-400 border-zinc-600/30";
      default:
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    }
  };

  const posterUrl = show.image?.medium || show.image?.original;

  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-zinc-900/90 border border-zinc-800/80 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300 hover:border-zinc-700">
      {/* ================= POSTER & OVERLAYS ================= */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-zinc-950">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={show.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder bila serial tidak memiliki poster gambar */
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-600 p-4 text-center">
            <svg
              className="w-12 h-12 mb-2 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <span className="text-xs font-medium">No Poster Available</span>
          </div>
        )}

        {/* Gradien overlay bawah untuk kontras visual */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-black/40 opacity-70 pointer-events-none" />

        {/* Badge Status (Pojok Kiri Atas) */}
        {show.status && (
          <div className="absolute top-2.5 left-2.5">
            <span
              className={`px-2.5 py-0.5 text-[11px] font-semibold tracking-wide rounded-full border backdrop-blur-md uppercase ${getStatusColor(show.status)}`}
            >
              {show.status}
            </span>
          </div>
        )}

        {/* Tombol Favorite (Pojok Kanan Atas) */}
        <button
          type="button"
          onClick={() => onFavorite(show)}
          aria-label={`Tambahkan ${show.name} ke favorit`}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-90 border border-white/10 group/btn"
        >
          <svg
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500 group-hover/btn:fill-white group-hover/btn:text-white"
                : "fill-none stroke-current"
            }`}
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>

        {/* Badge Rating & Bahasa (Pojok Bawah Poster) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
          {/* Rating */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-amber-400 font-semibold">
            <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>
              {show.rating?.average ? show.rating.average.toFixed(1) : "N/A"}
            </span>
          </div>

          {/* Language */}
          {show.language && (
            <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300 text-[11px] font-medium">
              {show.language}
            </span>
          )}
        </div>
      </div>

      {/* ================= INFORMASI DETAIL ================= */}
      <div className="flex flex-col flex-1 p-4">
        {/* Judul TV Show */}
        <h3
          title={show.name}
          className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-red-400 transition-colors"
        >
          {show.name}
        </h3>

        {/* Daftar Genre */}
        {show.genres && show.genres.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {show.genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="px-2 py-0.5 text-[10px] font-medium rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Ringkasan Cerita (Summary) */}
        <p className="mt-3 text-xs text-zinc-400 line-clamp-2 leading-relaxed flex-1">
          {cleanSummary}
        </p>
      </div>
    </div>
  );
}
