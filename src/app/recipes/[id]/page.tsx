import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/back-link";
import Badge from "@/components/badge";
import FavoriteButton from "@/components/favorite-button";
import { recipes } from "@/data/recipes";

type RecipeDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({ params }: RecipeDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);
  return { title: recipe ? `${recipe.name} · 食谱` : "未找到食谱" };
}

export default async function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);
  if (!recipe) notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pb-8 pt-6">
      <BackLink href="/recipes" label="返回食谱库" />

      <header className="mt-5 rounded-2xl bg-emerald-700 p-5 text-white">
        <p className="text-sm text-emerald-100">快速食谱</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">{recipe.name}</h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-white/15 px-3 py-1">约 {recipe.timeMinutes} 分钟</span>
          <span className="rounded-full bg-white/15 px-3 py-1">约 {recipe.proteinG}g 蛋白质</span>
        </div>
        <div className="mt-4">
          <FavoriteButton kind="recipe" id={recipe.id} />
        </div>
      </header>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">食材清单</h2>
        <ul className="mt-3 divide-y divide-slate-100">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient} className="flex items-center gap-3 py-3 text-sm text-slate-700">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">制作步骤</h2>
        <ol className="mt-3 space-y-4">
          {recipe.steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">标签</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          蛋白质为单人份粗略估算，实际数值会因食材和品牌而异。
        </p>
      </section>
    </main>
  );
}
