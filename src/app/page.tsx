// "use client";

// components
// import ThemeToggle from "@/components/main/ThemeToggle";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/main/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <h1>PortPolio</h1>
    </main>
  );
}
