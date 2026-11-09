import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-medium text-emerald-700">404</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">没有找到这个页面</h1>
      <p className="mt-2 text-sm leading-6 text-slate-500">链接可能已失效，或内容已被移动。</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-semibold text-white"
      >
        回到首页
      </Link>
    </main>
  );
}
