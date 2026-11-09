import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/back-link";
import Badge from "@/components/badge";
import { knowledgeCards } from "@/data/knowledge";

type KnowledgeDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return knowledgeCards.map((card) => ({ id: card.id }));
}

export async function generateMetadata({ params }: KnowledgeDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const card = knowledgeCards.find((item) => item.id === id);
  return { title: card ? `${card.title} · 知识` : "未找到知识卡片" };
}

export default async function KnowledgeDetailPage({ params }: KnowledgeDetailPageProps) {
  const { id } = await params;
  const card = knowledgeCards.find((item) => item.id === id);
  if (!card) notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pb-8 pt-6">
      <BackLink href="/knowledge" label="返回知识库" />
      <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <Badge>{card.category}</Badge>
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight">{card.title}</h1>
        <p className="mt-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{card.summary}</p>
        <div className="mt-6 space-y-5">
          {card.content.map((paragraph, index) => (
            <p key={index} className="text-sm leading-7 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
