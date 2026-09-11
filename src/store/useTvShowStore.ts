import { create } from "zustand";
import type { Show } from "../types/tvShowType";
import { persist } from "zustand/middleware";

interface TvShowState {
  show: Show[];

  addFavorite: (show: Show) => void;
  removeFavorite: (id: number) => void;
}

export const useTvShowStore = create<TvShowState>()(
  persist(
    (set) => ({
      show: [],

      addFavorite: (newShow) =>
        set((state) => {
          const exists = state.show.some(
            (showItem) => showItem.id === newShow.id,
          );

          if (exists) return state;
          return { show: [...state.show, newShow] };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          show: state.show.filter((showItem) => showItem.id !== id),
        })),
    }),
    {
      name: "tv-show-favorites",
    },
  ),
);
