import { Form, NavLink, useSearchParams } from "react-router";
import { useThemeStore } from "../store/useThemeStore ";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [searchParams] = useSearchParams();
  const currentTvShow = searchParams.get("tvshow") || "";

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* ================= 1. KIRI: LOGO TVSHOW ================= */}
        <div className="shrink-0">
          <NavLink
            to="/"
            className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-wider text-zinc-900 dark:text-white group"
          >
            <span className="p-1 rounded bg-red-600 text-white font-extrabold text-sm sm:text-base leading-none">
              TV
            </span>
            <span className="group-hover:text-red-500 transition-colors">
              SHOW
            </span>
          </NavLink>
        </div>

        {/* ================= 2. TENGAH: SEARCH INPUT ================= */}
        <div className="flex-1 max-w-sm sm:max-w-md mx-2">
          <Form method="get" action="/" className="relative w-full">
            <label htmlFor="tvShowInput" className="sr-only">
              Find TV series
            </label>

            {/* Icon Search */}
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500 dark:text-zinc-400">
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
                  d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              name="tvshow"
              id="tvShowInput"
              defaultValue={currentTvShow}
              placeholder="Cari serial TV..."
              className="w-full pl-10 pr-12 py-2 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-200"
            />

            {/* Tombol submit kecil di dalam input */}
            <button
              type="submit"
              aria-label="Cari"
              className="absolute inset-y-1 right-1 px-3 flex items-center bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-full text-xs font-medium transition-colors"
            >
              Cari
            </button>
          </Form>
        </div>

        {/* ================= 3. KANAN: ACTIONS (THEME, ABOUT, FAVORIT) ================= */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Toggle Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Menu About */}
          <NavLink
            to="/about"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors hidden sm:block"
          >
            About
          </NavLink>

          {/* Menu Favorit */}
          <NavLink
            to="/favorit"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-rose-500 dark:text-rose-400 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-lg transition-all active:scale-95"
          >
            {/* Heart Icon */}
            <svg
              className="w-4 h-4 fill-rose-500 text-rose-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="hidden sm:inline">Favorit</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
