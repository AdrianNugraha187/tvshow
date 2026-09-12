import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useThemeStore } from "../store/useThemeStore ";
import { useEffect } from "react";

export default function AppLayout() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* 
        ScrollRestoration: Otomatis mengembalikan scroll layar 
        ke posisi paling atas saat berpindah halaman antar route
      */}
      <ScrollRestoration />

      {/* Header / Navbar (menempel di bagian atas layar) */}
      <Navbar />

      {/* 
        Konten Utama (Main Content):
        - flex-1: Memastikan elemen ini mengisi seluruh sisa ruang vertikal
        - w-full: Memastikan lebar penuh di semua ukuran layar
      */}
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>

      {/* Footer (selalu terkunci di dasar halaman) */}
      <Footer />
    </div>
  );
}
