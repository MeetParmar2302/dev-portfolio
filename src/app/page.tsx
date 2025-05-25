"use client";

import Mobile from "@/components/Mobile";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("@/components/Desktop"), { ssr: false });

export default function Page() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
