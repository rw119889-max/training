"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Badge from "@/components/badge";
import PageHeader from "@/components/page-header";
import SearchInput from "@/components/search-input";
import { recipes } from "@/data/recipes";

export default function RecipesBrowser() {
  const [query, setQuery] = useState("");
  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return recipes;
    return recipes.filter((recipe) => recipe.name.toLocaleLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8">
      <PageHeader kicker="快速省时 · 营养均衡" title="食谱库" />
      <SearchInput
        id="recipe-search"
        label="按食谱名称搜索"
        placeholder="搜索食谱名称"
        value={query}
        onChange={setQuery}
      />
      <p className="mt-3 text-sm text-slate-500" aria-live="polite">
        共 {filteredRecipes.length} 个食谱 · 蛋白质为单人份估算
      </p>
      <div className="mt-4 space-y-3">
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold">{recipe.name}</h2>
              <span className="shrink-0 text-sm text-slate-500">{recipe.timeMinutes} 分钟</span>
            </div>
            <p className="mt-2 text-sm font-medium text-emerald-700">约 {recipe.proteinG}g 蛋白质</p>
            <p className="mt-2 line-clamp-2 text-sm text-slate-500">
              主要食材：{recipe.ingredients.slice(0, 3).join("、")}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {recipe.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Link>
        ))}
        {filteredRecipes.length === 0 && (
          <p className="rounded-xl bg-white p-5 text-center text-sm text-slate-500">
            没有找到匹配的食谱。
          </p>
        )}
      </div>
    </main>
  );
}
