import Link from "next/link";

export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-emerald-700">
      <span aria-hidden="true">←</span> {label}
    </Link>
  );
}
