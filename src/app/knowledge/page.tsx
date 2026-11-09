import type { Metadata } from "next";
import KnowledgeBrowser from "@/components/knowledge-browser";

export const metadata: Metadata = { title: "知识库" };

export default function KnowledgePage() {
  return <KnowledgeBrowser />;
}
