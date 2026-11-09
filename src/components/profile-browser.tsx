"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FAVORITES_EVENT, readFavorites, type FavoriteKind } from "@/components/favorite-button";
import PageHeader from "@/components/page-header";
import { exercises } from "@/data/exercises";
import { recipes } from "@/data/recipes";

type Favorites = Record<FavoriteKind, string[]>;

export default function ProfileBrowser() {
  const [favorites, setFavorites] = useState<Favorites>({ recipe: [], exercise: [] });

  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    sync();
    window.addEventListener(FAVORITES_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FAVORITES_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const favoriteRecipes = recipes.filter((recipe) => favorites.recipe.includes(recipe.id));
  const favoriteExercises = exercises.filter((exercise) => favorites.exercise.includes(exercise.id));

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8">
      <PageHeader kicker="本地偏好与收藏" title="我的" />

      <section aria-labelledby="favorite-recipes" className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 id="favorite-recipes" className="font-semibold">收藏的食谱</h2>
        {favoriteRecipes.length === 0 ? (
          <p className="mt-2 text-sm leading-6 text-slate-500">还没有收藏。在食谱详情页点「收藏」即可加入。</p>
        ) : (
          <ul className="mt-2 divide-y divide-slate-100">
            {favoriteRecipes.map((recipe) => (
              <li key={recipe.id}>
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="flex min-h-11 items-center justify-between gap-3 py-3 text-sm"
                >
                  <span className="font-medium text-slate-800">{recipe.name}</span>
                  <span className="shrink-0 text-slate-500">约 {recipe.proteinG}g 蛋白质</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="favorite-exercises" className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 id="favorite-exercises" className="font-semibold">收藏的动作</h2>
        {favoriteExercises.length === 0 ? (
          <p className="mt-2 text-sm leading-6 text-slate-500">还没有收藏。在动作详情页点「收藏」即可加入。</p>
        ) : (
          <ul className="mt-2 divide-y divide-slate-100">
            {favoriteExercises.map((exercise) => (
              <li key={exercise.id}>
                <Link
                  href={`/exercises/${exercise.id}`}
                  className="flex min-h-11 items-center justify-between gap-3 py-3 text-sm"
                >
                  <span className="font-medium text-slate-800">{exercise.name}</span>
                  <span className="shrink-0 text-slate-500">{exercise.difficulty}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-6 text-xs leading-5 text-slate-500">收藏只保存在本机浏览器，不会上传服务器。</p>
    </main>
  );
}
