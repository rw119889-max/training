import Link from "next/link";
import { notFound } from "next/navigation";
import { exercises } from "@/data/exercises";

type ExerciseDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return exercises.map((exercise) => ({ id: exercise.id }));
}

export default async function ExerciseDetailPage({ params }: ExerciseDetailPageProps) {
  const { id } = await params;
  const exercise = exercises.find((item) => item.id === id);
  if (!exercise) notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pb-8 pt-6">
      <Link href="/exercises" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-emerald-700" aria-label="返回动作库">
        <span aria-hidden="true">←</span> 返回动作库
      </Link>

      <header className="mt-5 rounded-2xl bg-sky-800 p-5 text-white">
        <p className="text-sm text-sky-100">训练动作 · {exercise.difficulty}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">{exercise.name}</h1>
        <p className="mt-4 text-sm leading-6 text-sky-50">目标肌群：{exercise.targetMuscles.join("、")}</p>
        <p className="mt-2 text-sm leading-6 text-sky-100">所需器材：{exercise.equipment.join("、")}</p>
      </header>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">动作要点</h2>
        <ol className="mt-3 space-y-4">
          {exercise.keyCues.map((cue, index) => (
            <li key={cue} className="flex gap-3 text-sm leading-6 text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-800">{index + 1}</span>
              <span>{cue}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-lg font-semibold text-amber-950">常见错误</h2>
        <ul className="mt-3 space-y-3">
          {exercise.commonMistakes.map((mistake) => (
            <li key={mistake} className="flex gap-3 text-sm leading-6 text-amber-950">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />{mistake}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">标签</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {exercise.tags.map((tag) => <span key={tag} className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-900">{tag}</span>)}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">动作说明仅作一般参考；如出现疼痛或不适，请停止动作并调整。</p>
      </section>
    </main>
  );
}
