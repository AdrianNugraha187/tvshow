import { useParams, useNavigate, Link } from "react-router";
import { useTvShowDetail } from "../../hooks/useTvShowDetail";
import { useTvShowStore } from "../../store/useTvShowStore";
import Loading from "../ui/Loading";
import ErrorPage from "../../pages/ErrorPage";
import {
  ArrowLeft,
  Star,
  Heart,
  Globe,
  Tag,
  Film,
  Calendar,
  //   Layers,
  Sparkles,
} from "lucide-react";

export default function TvShowDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: show, isLoading, isError } = useTvShowDetail(id || "");

  // Integrasi Zustand Store untuk Favorite
  const favorites = useTvShowStore((state) => state.show);
  const addFavorite = useTvShowStore((state) => state.addFavorite);
  const removeFavorite = useTvShowStore((state) => state.removeFavorite);

  // Cek apakah serial ini sudah ada di favorit
  const isFavorite = favorites?.some((item) => item.id === show?.id);

  const handleFavoriteToggle = () => {
    if (!show) return;
    if (isFavorite) {
      removeFavorite(show.id);
    } else {
      addFavorite(show);
    }
  };

  // Helper warna badge status
  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "running":
        return "bg-emerald-500/15 dark:bg-emerald-950/60 dark:text-emerald-400 text-emerald-400 border-emerald-500/30 dark:border-emerald-800/60";
      case "ended":
        return "bg-zinc-700/40 dark:bg-zinc-960/60 text-zinc-400 dark:text-zinc-400 border-zinc-600/30 dark:border-zinc-600/30";
      default:
        return "bg-amber-500/15 dark:bg-amber-950/60 text-amber-400 dark:text-amber-400 border-amber-500/30 dark:border-amber-500/30";
    }
  };

  // ================= GUARD STATES =================
  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loading />
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 animate-pulse">
          Memuat detail serial TV...
        </p>
      </div>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!show) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Data Tidak Ditemukan
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
          Informasi untuk serial TV ini tidak tersedia atau telah dihapus.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl text-sm font-medium transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const posterUrl = show.image?.original || show.image?.medium;

  return (
    <div className="relative min-h-screen pb-16 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors">
      {/* ================= BACKGROUND BLUR AMBIENT ================= */}
      {posterUrl && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-10 dark:opacity-20 filter blur-3xl scale-110">
          <img src={posterUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-50 via-zinc-50/80 to-zinc-50 dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-950" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Tombol Navigasi Kembali */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors text-sm font-medium backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali</span>
          </button>
        </div>

        {/* ================= UTAMA: POSTER & INFORMASI ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom Kiri: Poster & Tombol Favorit (md: 4 atau 5 kolom) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <div className="relative aspect-2/3 w-full rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={show.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-zinc-400 dark:text-zinc-600 text-center">
                  <Film className="w-16 h-16 mb-2 stroke-current" />
                  <span className="text-sm font-medium">
                    Poster Tidak Tersedia
                  </span>
                </div>
              )}

              {/* Status Badge di atas poster */}
              {show.status && (
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md uppercase tracking-wider ${getStatusBadge(
                      show.status,
                    )}`}
                  >
                    {show.status}
                  </span>
                </div>
              )}
            </div>

            {/* Tombol Aksi Tambah / Hapus Favorit */}
            <button
              onClick={handleFavoriteToggle}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 border shadow-lg active:scale-98 ${
                isFavorite
                  ? "bg-rose-100 dark:bg-rose-600/20 border-rose-300 dark:border-rose-500/40 text-rose-600 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-600/30 shadow-rose-950/10 dark:shadow-rose-950/20"
                  : "bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-zinc-950/10 dark:shadow-zinc-950/40"
              }`}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorite
                    ? "fill-rose-500 text-rose-500"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              />
              <span>
                {isFavorite ? "Hapus dari Favorit" : "Tambah ke Favorit"}
              </span>
            </button>
          </div>

          {/* Kolom Kanan: Detail Informasi Lengkap (md: 7 atau 8 kolom) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            {/* ID & Title */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-zinc-500">
                <span>TV SHOW ID: #{show.id}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                {show.name}
              </h1>
            </div>

            {/* Quick Badges: Rating, Bahasa, Status */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Rating */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/25 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-500 dark:fill-amber-400" />
                <span>
                  {show.rating?.average
                    ? `${show.rating.average} / 10`
                    : "Belum ada rating"}
                </span>
              </div>

              {/* Language */}
              {show.language && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                  <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>{show.language}</span>
                </div>
              )}

              {/* Status */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                <Calendar className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>
                  Status:{" "}
                  <strong className="text-zinc-900 dark:text-white font-semibold">
                    {show.status}
                  </strong>
                </span>
              </div>
            </div>

            {/* Genre Tags */}
            {show.genres && show.genres.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Genre</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Kotak Rangkuman Data Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 text-xs">
              <div>
                <span className="text-zinc-500 block">ID Serial</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                  #{show.id}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">Bahasa Utama</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                  {show.language || "-"}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">Status Tayang</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                  {show.status}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">Rata-rata Skor</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                  {show.rating?.average ? `${show.rating.average} / 10` : "N/A"}
                </span>
              </div>
            </div>

            {/* ================= SINOPSIS LENGKAP (SUMMARY) ================= */}
            <div className="pt-2 space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-500" />
                <span>Sinopsis Cerita</span>
              </h2>

              {/* 
            TVMaze API mengirimkan ringkasan cerita dalam tag HTML seperti <p> dan <b>.
            Menggunakan dangerouslySetInnerHTML memastikan paragraf ditampilkan utuh & rapi.
          */}
              {show.summary ? (
                <div
                  className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-3 bg-zinc-100 dark:bg-zinc-900/30 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 [&>p]:leading-relaxed [&>p]:mb-3 [&>b]:text-zinc-900 dark:[&>b]:text-white [&>b]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                />
              ) : (
                <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 text-zinc-500 text-sm italic">
                  Sinopsis cerita belum disediakan oleh TVMaze API untuk serial
                  ini.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
