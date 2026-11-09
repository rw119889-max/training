export default function Loading() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-5 pt-8" aria-busy="true" aria-label="加载中">
      <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
      <div className="mt-3 h-8 w-40 animate-pulse rounded bg-slate-200" />
      <div className="mt-6 h-12 w-full animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-4 space-y-3">
        {[0, 1, 2].map((index) => (
          <div key={index} className="h-24 w-full animate-pulse rounded-2xl bg-white" />
        ))}
      </div>
    </main>
  );
}
