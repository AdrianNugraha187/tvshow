import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 font-sans">
      {/* Bagian Konten Utama Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolom 1: Brand & Ringkasan */}
          <div className="space-y-4">
            <Link
              to="/"
              className=" items-center gap-1.5 text-2xl font-black tracking-wider text-white group inline-block"
            >
              <span className="p-1 rounded bg-red-600 text-white font-extrabold text-sm leading-none">
                TV
              </span>
              <span className="group-hover:text-red-500 transition-colors">
                SHOW
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Platform katalog serial TV interaktif untuk mencari serial
              favorit, jadwal penayangan, ringkasan cerita, dan menyimpan serial
              pilihan Anda.
            </p>
            {/* Tombol ke GitHub */}
            <div>
              <a
                href="https://github.com/AdrianNugraha187/tvshow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                {/* GitHub Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Lihat di GitHub</span>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="hover:text-red-400 transition-colors"
                >
                  Serial Favorit
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-red-400 transition-colors"
                >
                  Tentang Aplikasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi Sumber API (TVmaze) */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Sumber Data API
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seluruh metadata, deskripsi, gambar poster, dan jadwal episode
              disediakan langsung secara gratis oleh:
            </p>
            <div>
              <a
                href="https://www.tvmaze.com/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <span>TVmaze REST API</span>
                {/* External Link Icon */}
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-medium bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 rounded-md">
              Fast & Free Public API
            </span>
          </div>

          {/* Kolom 4: Tech Stack & Developer */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Dibuat Dengan
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                React Router
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                Zustand
              </span>
            </div>
            <p className="text-xs text-zinc-500 pt-2 leading-relaxed">
              Dikembangkan oleh{" "}
              <a
                href="https://github.com/AdrianNugraha187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:underline font-medium"
              >
                Adrian Nugraha
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Disclaimer */}
      <div className="border-t border-zinc-900 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-zinc-300 font-medium">TVSHOW</span>. Proyek
            open-source untuk portofolio.
          </p>
          <p className="text-center sm:text-right">
            Data dan gambar dilindungi hak cipta oleh masing-masing pemilik
            konten via{" "}
            <a
              href="https://www.tvmaze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-300 underline"
            >
              TVmaze.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
