"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Badge from "@/components/badge";
import PageHeader from "@/components/page-header";
import SearchInput from "@/components/search-input";
import { knowledgeCards, type KnowledgeCategory } from "@/data/knowledge";

const categories: ("全部" | KnowledgeCategory)[] = ["全部", "训练原则", "营养基础", "恢复", "常见误区"];

export default function KnowledgeBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("全部");

  const filteredCards = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return knowledgeCards.filter((card) => {
      const matchesCategory = category === "全部" || card.category === category;
      const matchesQuery =
        !normalizedQuery ||
        [card.title, card.summary, card.category, ...card.content].some((value) =>
          value.toLocaleLowerCase().includes(normalizedQuery),
        );
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8">
      <PageHeader kicker="简明解释 · 随时查阅" title="知识库" />

      <SearchInput
        id="knowledge-search"
        label="搜索知识卡片"
        placeholder="搜索标题、摘要或内容"
        value={query}
        onChange={setQuery}
      />

      <div
        role="group"
        aria-label="知识分类筛选"
        className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-2"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              category === item
                ? "bg-emerald-700 font-medium text-white"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-2 text-sm text-slate-500" aria-live="polite">
        共 {filteredCards.length} 条知识卡片
      </p>
      <div className="mt-4 space-y-3">
        {filteredCards.map((card) => (
          <Link
            key={card.id}
            href={`/knowledge/${card.id}`}
            className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200"
          >
            <Badge>{card.category}</Badge>
            <h2 className="mt-3 font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.summary}</p>
          </Link>
        ))}
        {filteredCards.length === 0 && (
          <p className="rounded-xl bg-white p-5 text-center text-sm text-slate-500">
            没有找到匹配的知识卡片。
          </p>
        )}
      </div>
    </main>
  );
}
