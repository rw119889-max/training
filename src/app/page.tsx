import Link from "next/link";
import { recipes } from "@/data/recipes";
import { exercises } from "@/data/exercises";
import { knowledgeCards } from "@/data/knowledge";

// 首页先展示数据集前 3 项；具体训练记录仍由原有训练 App 维护。
const quickMeals = recipes.slice(0, 3);
const todayExercises = exercises.slice(0, 3);
const recommendedKnowledge = knowledgeCards.slice(0, 3);

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl bg-slate-50 px-5 pb-24 pt-8 text-slate-900">
      <header className="mb-8">
        <p className="text-sm font-medium text-emerald-700">训练与营养助手</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">今天，稳稳完成计划</h1>
        <p className="mt-2 text-sm text-slate-500">快速查动作、找一餐简单又营养的选择。</p>
      </header>

      <section aria-labelledby="today-workout" className="rounded-2xl bg-emerald-700 p-5 text-white shadow-sm">
        <p className="text-sm text-emerald-100">今日训练动作参考</p>
        <h2 id="today-workout" className="mt-1 text-lg font-semibold">从动作库快速查看要领</h2>
        <ul className="mt-4 space-y-2">
          {todayExercises.map((exercise) => (
            <li key={exercise.id}>
              <Link href={`/exercises/${exercise.id}`} className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
                <span>{exercise.name}</span>
                <span className="text-emerald-100">{exercise.targetMuscles[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-5 text-emerald-100">这是动作参考清单，不代表已同步或安排了你的今日训练。</p>
        <Link href="/exercises" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-800">打开动作库</Link>
      </section>

      <section aria-labelledby="quick-meals" className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">少花时间做饭</p>
            <h2 id="quick-meals" className="mt-1 text-xl font-bold">推荐快速餐</h2>
          </div>
          <Link href="/recipes" className="text-sm font-medium text-emerald-700">全部食谱</Link>
        </div>
        <div className="space-y-3">
          {quickMeals.map((meal) => (
            <Link key={meal.id} href={`/recipes/${meal.id}`} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200">
              <div>
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{meal.timeMinutes} 分钟 · 约 {meal.proteinG}g 蛋白质</p>
              </div>
              <span className="ml-3 shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{meal.tags[0]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="recommended-knowledge" className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">训练与营养小知识</p>
            <h2 id="recommended-knowledge" className="mt-1 text-xl font-bold">推荐知识</h2>
          </div>
          <Link href="/knowledge" className="text-sm font-medium text-emerald-700">全部知识</Link>
        </div>
        <div className="space-y-3">
          {recommendedKnowledge.map((card) => (
            <Link key={card.id} href={`/knowledge/${card.id}`} className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">{card.category}</span>
              <h3 className="mt-3 font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">{card.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
