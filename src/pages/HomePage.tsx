import TvShowPage from "../components/tvshow/TvShowPage";

export default function HomePage() {
  // Fungsi untuk scroll otomatis ke katalog TV Show saat tombol diklik
  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById("catalog-section");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-zinc-800/80 bg-linear-to-b from-zinc-900/60 via-zinc-950 to-zinc-950">
        {/* Efek Ambient Glow / Spotlight di background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-red-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute -top-20 right-10 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          {/* Badge Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Katalog TV Show Terlengkap & Terupdate
          </div>

          {/* Headline Utama */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Temukan Serial TV <br />
            <span className="bg-linear-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Favorit Berikutnya
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed">
            Jelajahi ribuan judul serial TV populer, pantau episode terbaru, dan
            simpan ke daftar favorit Anda secara instan dalam satu tempat.
          </p>

          {/* Tombol Call to Action (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScrollToCatalog}
              className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Mulai Eksplorasi</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          {/* Statistik / Fitur Singkat */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 pt-10 border-t border-zinc-800/60 text-zinc-400">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                10.000+
              </p>
              <p className="text-xs sm:text-sm mt-1 text-zinc-500">
                Judul TV Series
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Real-Time
              </p>
              <p className="text-xs sm:text-sm mt-1 text-zinc-500">
                Pencarian Cepat
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Personal
              </p>
              <p className="text-xs sm:text-sm mt-1 text-zinc-500">
                Daftar Favorit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TV SHOW CATALOG SECTION ================= */}
      <section
        id="catalog-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header Seksi Katalog */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Katalog TV Series
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-1">
            Gunakan kotak pencarian atau jelajahi serial di bawah ini.
          </p>
        </div>

        {/* Komponen Katalog Asli Anda */}
        <TvShowPage />
      </section>
    </div>
  );
}
