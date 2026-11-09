"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { exercises } from "@/data/exercises";

export default function ExercisesPage() {
  const [query, setQuery] = useState("");
  const filteredExercises = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return exercises;
    return exercises.filter((exercise) =>
      [exercise.name, ...exercise.targetMuscles].some((value) => value.toLocaleLowerCase().includes(normalizedQuery)),
    );
  }, [query]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8">
      <p className="text-sm font-medium text-emerald-700">随时查阅 · 规范训练</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">动作库</h1>
      <label htmlFor="exercise-search" className="sr-only">按动作名称或目标肌群搜索</label>
      <input
        id="exercise-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="搜索动作或肌群，如：卧推、背阔肌"
        className="mt-5 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      />
      <p className="mt-3 text-sm text-slate-500">共 {filteredExercises.length} 个动作</p>
      <div className="mt-4 space-y-3">
        {filteredExercises.map((exercise) => (
          <Link key={exercise.id} href={`/exercises/${exercise.id}`} className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold">{exercise.name}</h2>
              <span className="shrink-0 text-xs text-slate-500">{exercise.difficulty}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">目标肌群：{exercise.targetMuscles.join("、")}</p>
            <p className="mt-1 text-sm text-slate-500">器材：{exercise.equipment.join("、")}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exercise.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-sky-50 px-2.5 py-1 text-xs text-sky-800">{tag}</span>)}
            </div>
          </Link>
        ))}
        {filteredExercises.length === 0 && <p className="rounded-xl bg-white p-5 text-center text-sm text-slate-500">没有找到匹配的动作或肌群。</p>}
      </div>
    </main>
  );
}
