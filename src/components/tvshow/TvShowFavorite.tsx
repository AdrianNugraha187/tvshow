import { useTvShowStore } from "../../store/useTvShowStore";

export default function TvShowFavorite() {
  const tvShowFavorite = useTvShowStore((state) => state.show);
  const removeFavorite = useTvShowStore((state) => state.removeFavorite);

  if (tvShowFavorite.length === 0) {
    return <p>Belum ada favorit yang disimpan.</p>;
  }

  return (
    <div>
      <h2>Daftar Favorit</h2>
      {tvShowFavorite.map((showFavorite) => (
        <div key={showFavorite.id}>
          <img src={showFavorite.image?.original} alt={showFavorite.name} />
          <button onClick={() => removeFavorite(showFavorite.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
