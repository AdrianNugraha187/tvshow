import {
  Tv,
  Database,
  ExternalLink,
  Search,
  Heart,
  Layers,
  Sparkles,
  Code2,
  Globe,
  Zap,
} from "lucide-react";

export default function About() {
  // Daftar fitur utama aplikasi
  const features = [
    {
      icon: <Search className="w-5 h-5 text-red-400" />,
      title: "Pencarian Instan",
      description:
        "Cari serial TV apa pun secara cepat dan akurat menggunakan integrasi pencarian langsung ke endpoint TVMaze.",
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      title: "Favorites Management",
      description:
        "Simpan serial pilihan ke dalam daftar tontonan pribadi Anda dengan manajemen state lokal yang tersinkronisasi.",
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      title: "Katalog & Pagination",
      description:
        "Jelajahi puluhan serial per halaman secara teratur dan mulus melalui navigasi pagination yang responsif.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: "Metadata Lengkap",
      description:
        "Akses informasi komprehensif mulai dari poster beresolusi tinggi, skor rating rata-rata, genre, status, hingga sinopsis cerita.",
    },
  ];

  // Daftar teknologi yang digunakan
  const techStack = [
    {
      name: "React",
      category: "Frontend Library",
      desc: "Komponen berbasis UI deklaratif",
    },
    {
      name: "React Router",
      category: "Routing & Navigation",
      desc: "Manajemen rute & URL search parameters",
    },
    {
      name: "TanStack Query / Zustand",
      category: "State Management",
      desc: "Pengambilan data API & penyimpanan daftar favorit",
    },
    {
      name: "Tailwind CSS",
      category: "Styling Framework",
      desc: "Desain antarmuka modern bertema dark/slate",
    },
    {
      name: "Lucide React",
      category: "Iconography",
      desc: "Kumpulan ikon modern yang bersih dan konsisten",
    },
    {
      name: "TVMaze API",
      category: "REST Data Source",
      desc: "Penyedia data katalog dan jadwal serial TV publik",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= 1. HERO / TITLE SECTION ================= */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium">
            <Tv className="w-4 h-4" />
            <span>Tentang Aplikasi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            About{" "}
            <span className="bg-linear-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              TVShow App
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            TVShow App adalah platform katalog serial televisi modern yang
            dirancang untuk memudahkan para penggemar serial mencari informasi
            tayangan, mengecek rating, jadwal siaran, dan mengelola daftar
            tontonan favorit dalam satu antarmuka yang intuitif.
          </p>
        </section>

        {/* ================= 2. DATA SOURCE SECTION (TVMAZE API) ================= */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-950 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                <Database className="w-4 h-4" />
                <span>Sumber Data Terbuka</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                Didukung Penuh oleh TVMaze API
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Seluruh metadata yang ditampilkan—termasuk informasi acara,
                jadwal penayangan, poster resolusi tinggi, rating komunitas,
                hingga sinopsis cerita—diambil langsung secara *real-time* dari
                layanan publik gratis{" "}
                <strong className="text-zinc-900 dark:text-white">
                  TVMaze REST API
                </strong>
                .
              </p>
            </div>

            {/* Special Badge / Card "Powered by TVMaze API" */}
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://www.tvmaze.com/api"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between md:justify-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-500/60 text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-emerald-950/10 dark:hover:shadow-emerald-950/40 active:scale-95"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-600/80 dark:text-emerald-400/80">
                      Data Provider
                    </p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">
                      Powered by TVMaze API
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= 3. APP FEATURES SECTION ================= */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-red-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Fitur Utama Aplikasi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all duration-200 space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. TECH STACK SECTION ================= */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Teknologi yang Digunakan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-colors"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  {tech.category}
                </span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  {tech.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
