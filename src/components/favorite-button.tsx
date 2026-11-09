"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@/components/icons";

export type FavoriteKind = "recipe" | "exercise";

type Favorites = Record<FavoriteKind, string[]>;

export const FAVORITES_KEY = "tnm:favorites";
export const FAVORITES_EVENT = "tnm:favorites-changed";

const emptyFavorites: Favorites = { recipe: [], exercise: [] };

export function readFavorites(): Favorites {
  if (typeof window === "undefined") return emptyFavorites;
  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    if (!raw) return emptyFavorites;
    const parsed = JSON.parse(raw) as Partial<Record<FavoriteKind, unknown>>;
    return {
      recipe: Array.isArray(parsed.recipe)
        ? parsed.recipe.filter((id): id is string => typeof id === "string")
        : [],
      exercise: Array.isArray(parsed.exercise)
        ? parsed.exercise.filter((id): id is string => typeof id === "string")
        : [],
    };
  } catch {
    return emptyFavorites;
  }
}

function writeFavorites(favorites: Favorites) {
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  window.dispatchEvent(new Event(FAVORITES_EVENT));
}

export default function FavoriteButton({ kind, id }: { kind: FavoriteKind; id: string }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const sync = () => setFavorited(readFavorites()[kind].includes(id));
    sync();
    window.addEventListener(FAVORITES_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FAVORITES_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [kind, id]);

  const toggle = () => {
    const current = readFavorites();
    const ids = new Set(current[kind]);
    if (ids.has(id)) {
      ids.delete(id);
    } else {
      ids.add(id);
    }
    writeFavorites({ ...current, [kind]: [...ids] });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={favorited}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition ${
        favorited
          ? "border-white bg-white text-emerald-800"
          : "border-white/30 bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      <StarIcon filled={favorited} className="h-4 w-4" />
      {favorited ? "已收藏" : "收藏"}
    </button>
  );
}
