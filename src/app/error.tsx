"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-medium text-emerald-700">出错了</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">页面加载失败</h1>
      <p className="mt-2 text-sm leading-6 text-slate-500">可以重试一次，或回到首页继续使用。</p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-semibold text-white"
        >
          重试
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700"
        >
          回到首页
        </Link>
      </div>
    </main>
  );
}
