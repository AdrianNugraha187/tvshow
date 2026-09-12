interface LoadingProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export default function Loading({
  text = "Memuat data...",
  size = "md",
  fullScreen = false,
}: LoadingProps) {
  // Pengaturan ukuran spinner
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-14 h-14 border-4",
  };

  const spinnerContent = (
    <div
      className="flex flex-col items-center justify-center gap-3.5 p-4"
      role="status"
      aria-label="Loading"
    >
      {/* Container Spinner & Efek Glow */}
      <div className="relative flex items-center justify-center">
        {/* Efek ambient glow di belakang spinner */}
        <div className="absolute inset-0 rounded-full bg-red-600/10 dark:bg-red-600/20 blur-md pointer-events-none" />

        {/* Lingkaran Spinner Utama */}
        <div
          className={`${sizeClasses[size]} rounded-full border-zinc-200 dark:border-zinc-800 border-t-red-500 border-r-red-500 animate-spin`}
        />

        {/* Titik Pusat Mini (Opsional, memberi aksen modern) */}
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
      </div>

      {/* Teks Keterangan Memuat */}
      {text && (
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 tracking-wide animate-pulse">
          {text}
        </p>
      )}

      <span className="sr-only">Sedang memuat...</span>
    </div>
  );

  // Jika ingin menampilkan loader di tengah layar penuh
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        {spinnerContent}
      </div>
    );
  }

  // Tampilan default (inline/container loader)
  return spinnerContent;
}
