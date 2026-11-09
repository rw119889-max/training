import Link from "next/link";
import { notFound } from "next/navigation";
import { knowledgeCards } from "@/data/knowledge";

type KnowledgeDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return knowledgeCards.map((card) => ({ id: card.id }));
}

export default async function KnowledgeDetailPage({ params }: KnowledgeDetailPageProps) {
  const { id } = await params;
  const card = knowledgeCards.find((item) => item.id === id);
  if (!card) notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pb-8 pt-6">
      <Link href="/knowledge" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-emerald-700" aria-label="返回知识库">
        <span aria-hidden="true">←</span> 返回知识库
      </Link>
      <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">{card.category}</span>
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight">{card.title}</h1>
        <p className="mt-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{card.summary}</p>
        <div className="mt-6 space-y-5">
          {card.content.map((paragraph, index) => (
            <p key={index} className="text-sm leading-7 text-slate-700">{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
