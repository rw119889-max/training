import type { Metadata } from "next";
import RecipesBrowser from "@/components/recipes-browser";

export const metadata: Metadata = { title: "食谱库" };

export default function RecipesPage() {
  return <RecipesBrowser />;
}
