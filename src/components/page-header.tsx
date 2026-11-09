import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
};

export default function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <header>
      <p className="text-sm font-medium text-emerald-700">{kicker}</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">{title}</h1>
      {children}
    </header>
  );
}
