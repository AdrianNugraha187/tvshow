import type { Show } from "../../types/tvShowType";

interface CardProps {
  show: Show;
  onFavorite: (show: Show) => void;
}

export default function TvShowCard({ show, onFavorite }: CardProps) {
  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show?.image?.original} alt={show.name} />
      <button onClick={() => onFavorite(show)}>Favorite</button>
    </div>
  );
}
