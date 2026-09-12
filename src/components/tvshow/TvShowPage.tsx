import { useSearchParams } from "react-router";
import { useTvShow } from "../../hooks/useTvShow";
import { useTvShowStore } from "../../store/useTvShowStore";
import { useState, useEffect } from "react";
import TvShowForm from "./TvShowForm";
import Loading from "../ui/Loading";
import TvShowCard from "./TvShowCard";

export default function TvShowPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams] = useSearchParams();

  const addFavorite = useTvShowStore((state) => state.addFavorite);
  const tvShowSearch = searchParams.get("tvshow") || "";

  const { data, isError, error, isLoading } = useTvShow(tvShowSearch);

  const tvShowPerPage = 20;
  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / tvShowPerPage);

  // Reset ke halaman 1 setiap kali kata kunci pencarian berganti
  useEffect(() => {
    setCurrentPage(1);
  }, [tvShowSearch]);

  const startIndex = (currentPage - 1) * tvShowPerPage;
  const endIndex = startIndex + tvShowPerPage;
  const currentTvShows = data?.slice(startIndex, endIndex);

  // Handler ganti halaman dengan scroll halus ke bagian atas katalog
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const catalogElement = document.getElementById("catalog-top");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="catalog-top" className="w-full space-y-8">
      {/* 1. SECTION FORM & FILTER */}
      <section className="bg-zinc-900/60 p-4 sm:p-6 rounded-2xl border border-zinc-800/80 backdrop-blur-sm shadow-xl">
        <TvShowForm />
      </section>

      {/* 2. KETERANGAN PENCARIAN / STATS */}
      {!isLoading && !isError && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-zinc-400 px-1">
          <div>
            {tvShowSearch ? (
              <p>
                Hasil pencarian untuk:{" "}
                <span className="font-semibold text-white">
                  "{tvShowSearch}"
                </span>
              </p>
            ) : (
              <p className="font-medium text-zinc-300">Semua Serial TV</p>
            )}
          </div>
          <p className="text-xs sm:text-sm text-zinc-500">
            Ditemukan{" "}
            <span className="font-semibold text-zinc-300">{totalItems}</span>{" "}
            serial TV
          </p>
        </div>
      )}

      {/* 3. LOADING STATE */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-24">
          <Loading />
          <p className="mt-4 text-sm text-zinc-400 animate-pulse">
            Memuat serial TV favorit Anda...
          </p>
        </div>
      )}

      {/* 4. ERROR STATE */}
      {isError && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 flex items-center gap-3">
          <svg
            className="w-5 h-5 shrink-0 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm">
            Terjadi kesalahan saat memuat data: {(error as Error).message}
          </p>
        </div>
      )}

      {/* 5. EMPTY STATE (TIDAK ADA HASIL) */}
      {!isLoading && !isError && totalItems === 0 && (
        <div className="text-center py-20 px-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/60 flex flex-col items-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-500">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">
            Tidak ada serial TV ditemukan
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-sm">
            Serial dengan kata kunci tersebut tidak tersedia. Coba gunakan kata
            kunci lain.
          </p>
        </div>
      )}

      {/* 6. GRID KATALOG TV SHOW */}
      {!isLoading && !isError && totalItems > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {currentTvShows?.map((item) => (
              <div
                key={item.id}
                className="transition-transform duration-200 hover:-translate-y-1"
              >
                <TvShowCard show={item} onFavorite={addFavorite} />
              </div>
            ))}
          </div>

          {/* 7. PAGINATION SECTION */}
          {totalPages > 1 && (
            <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-zinc-400 order-2 sm:order-1">
                Menampilkan{" "}
                <span className="font-semibold text-white">
                  {startIndex + 1}
                </span>{" "}
                -{" "}
                <span className="font-semibold text-white">
                  {Math.min(endIndex, totalItems)}
                </span>{" "}
                dari{" "}
                <span className="font-semibold text-white">{totalItems}</span>{" "}
                serial
              </span>

              {/* Tombol Halaman */}
              <div className="flex items-center gap-2 order-1 sm:order-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 transition-all flex items-center gap-1.5"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Prev</span>
                </button>

                <div className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                  <span className="text-red-500">{currentPage}</span> /{" "}
                  {totalPages}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 transition-all flex items-center gap-1.5"
                >
                  <span>Next</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
