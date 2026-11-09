import type { Metadata } from "next";
import ExercisesBrowser from "@/components/exercises-browser";

export const metadata: Metadata = { title: "动作库" };

export default function ExercisesPage() {
  return <ExercisesBrowser />;
}
