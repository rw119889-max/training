"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookIcon, BowlIcon, DumbbellIcon, HomeIcon, UserIcon } from "@/components/icons";

const tabs = [
  { href: "/", label: "首页", Icon: HomeIcon },
  { href: "/recipes", label: "食谱", Icon: BowlIcon },
  { href: "/exercises", label: "动作", Icon: DumbbellIcon },
  { href: "/knowledge", label: "知识", Icon: BookIcon },
  { href: "/profile", label: "我的", Icon: UserIcon },
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
        {tabs.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                active ? "font-semibold text-emerald-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "stroke-[2.4]" : ""}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
