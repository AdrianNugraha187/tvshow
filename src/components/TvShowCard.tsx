import type { Show } from "../types/tvShowType";

export default function TvShowCard({ show }: { show: Show }) {
  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show?.image?.original} alt={show.name} />
    </div>
  );
}
