"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "首页", icon: "⌂" },
  { href: "/recipes", label: "食谱", icon: "◷" },
  { href: "/exercises", label: "动作", icon: "↗" },
  { href: "/knowledge", label: "知识", icon: "▤" },
  { href: "/profile", label: "我的", icon: "○" },
];

/** 固定底部导航：用路径标记当前页面，并兼容手机安全区。 */
export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="主导航"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="mx-auto grid h-16 max-w-xl grid-cols-5">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                active ? "font-semibold text-emerald-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span aria-hidden="true" className="text-xl leading-5">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
