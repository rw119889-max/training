import type { ReactNode } from "react";

const tones = {
  emerald: "bg-emerald-50 text-emerald-800",
  sky: "bg-sky-50 text-sky-800",
};

export default function Badge({
  children,
  tone = "emerald",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
