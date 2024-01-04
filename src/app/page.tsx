import ThemeToggle from "@/components/main/ThemeToggle";

export default function Home() {
  return (
    <main>
      <ThemeToggle name="themeToggle" on={false} />
      <h1>PortPolio</h1>
    </main>
  );
}
