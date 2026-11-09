export default function ProfilePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8">
      <p className="text-sm font-medium text-emerald-700">本地偏好与收藏</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">我的</h1>
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold">个人空间</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">这里将集中展示收藏内容和简单设置。</p>
      </section>
    </main>
  );
}
