import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "离线中" };

export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-medium text-emerald-700">离线中</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">当前没有网络连接</h1>
      <p className="mt-2 text-sm leading-6 text-slate-500">之前打开过的页面可能仍可查看，联网后会自动恢复最新内容。</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-semibold text-white"
      >
        重新打开首页
      </Link>
    </main>
  );
}
