import type { Metadata } from "next";
import ProfileBrowser from "@/components/profile-browser";

export const metadata: Metadata = { title: "我的" };

export default function ProfilePage() {
  return <ProfileBrowser />;
}
