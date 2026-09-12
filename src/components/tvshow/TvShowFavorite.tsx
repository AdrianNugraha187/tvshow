import { Link } from "react-router";
import { useTvShowStore } from "../../store/useTvShowStore";
import type { Show } from "../../types/tvShowType";

export default function TvShowFavorite() {
  const tvShowFavorite = useTvShowStore((state) => state.show);
  const removeFavorite = useTvShowStore((state) => state.removeFavorite);

  // Helper pembersih tag HTML dari summary
  const cleanSummary = (summary: string | null) => {
    if (!summary) return "Sinopsis belum tersedia.";
    return summary.replace(/<[^>]*>?/gm, "").trim();
  };

  // Helper warna badge status serial
  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "running":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "ended":
        return "bg-zinc-700/40 text-zinc-400 border-zinc-600/30";
      default:
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
    }
  };

  // ================= 1. EMPTY STATE =================
  if (!tvShowFavorite || tvShowFavorite.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md mx-auto p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 shadow-2xl backdrop-blur-sm">
          {/* Empty Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-rose-50 dark:bg-zinc-800/60 border border-rose-200 dark:border-zinc-700/50 flex items-center justify-center text-rose-500 dark:text-rose-500/70 shadow-inner">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
            Belum Ada Serial Favorit
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            Anda belum menambahkan serial TV apa pun ke daftar favorit. Jelajahi
            katalog sekarang dan simpan serial kesukaan Anda!
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-red-600/25 active:scale-95"
          >
            <span>Eksplorasi Katalog</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // ================= 2. KATALOG FAVORIT =================
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-3">
            <svg className="w-3.5 h-3.5 fill-rose-500" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Koleksi Pribadi
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Serial TV Favorit
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Daftar serial yang telah Anda tandai untuk ditonton kapan saja.
          </p>
        </div>

        {/* Counter Badge & Tombol Kembali */}
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Total:{" "}
            <strong className="text-rose-600 dark:text-rose-400 font-bold">
              {tvShowFavorite.length}
            </strong>{" "}
            Serial
          </span>
          <Link
            to="/"
            className="px-4 py-1.5 rounded-xl bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-sm font-medium transition-colors"
          >
            + Tambah Serial
          </Link>
        </div>
      </div>

      {/* Grid Kartu Favorit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tvShowFavorite.map((showFavorite: Show) => {
          const posterUrl =
            showFavorite.image?.medium || showFavorite.image?.original;

          return (
            <div
              key={showFavorite.id}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/10 dark:hover:shadow-rose-950/20"
            >
              {/* === Poster Container === */}
              <div className="relative aspect-16/10 sm:aspect-3/4 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-950">
                {posterUrl ? (
                  <img
                    src={posterUrl}
                    alt={showFavorite.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-200 dark:bg-zinc-950 text-zinc-400 dark:text-zinc-600 p-4 text-center">
                    <svg
                      className="w-10 h-10 mb-2 stroke-current"
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
                    <span className="text-xs">No Image Available</span>
                  </div>
                )}

                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Badge Status (Kiri Atas) */}
                {showFavorite.status && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border backdrop-blur-md uppercase tracking-wider ${getStatusBadge(showFavorite.status)}`}
                    >
                      {showFavorite.status}
                    </span>
                  </div>
                )}

                {/* Tombol Hapus Favorit (Kanan Atas) */}
                <button
                  type="button"
                  onClick={() => removeFavorite(showFavorite.id)}
                  title="Hapus dari Favorit"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-rose-600 text-zinc-300 hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 border border-white/10 group/btn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>

                {/* Rating & Bahasa (Bawah Poster) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 font-bold">
                    <svg
                      className="w-3.5 h-3.5 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>
                      {showFavorite.rating?.average
                        ? showFavorite.rating.average.toFixed(1)
                        : "N/A"}
                    </span>
                  </div>

                  {/* Language Badge */}
                  {showFavorite.language && (
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-zinc-300 font-medium text-[11px]">
                      {showFavorite.language}
                    </span>
                  )}
                </div>
              </div>

              {/* === Konten Detail === */}
              <div className="flex flex-col flex-1 p-5">
                {/* ID & Nama Serial */}
                <div className="mb-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    ID: #{showFavorite.id}
                  </span>
                  <h3
                    title={showFavorite.name}
                    className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight line-clamp-1 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors"
                  >
                    {showFavorite.name}
                  </h3>
                </div>

                {/* Genre Badges */}
                {showFavorite.genres && showFavorite.genres.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {showFavorite.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                )}

                {/* Summary / Sinopsis */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4 flex-1">
                  {cleanSummary(showFavorite.summary)}
                </p>

                {/* Action Bar Bawah */}
                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">
                    Tersimpan di Watchlist
                  </span>
                  <button
                    onClick={() => removeFavorite(showFavorite.id)}
                    className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors flex items-center gap-1"
                  >
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
