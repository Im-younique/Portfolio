"use client";

// recoil
import { useRecoilState } from "recoil";
import { themeState } from "@/lib/recoil/atoms/themeState";

// components
import ThemeToggle from "@/components/main/ThemeToggle";

export default function Home() {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleThemeChange = () => {
    theme === "white" ? setTheme("dark") : setTheme("white");
  };

  console.log(theme);

  return (
    <main>
      <ThemeToggle
        name="themeToggle"
        theme={theme}
        onChange={handleThemeChange}
      />
      <h1>PortPolio</h1>
    </main>
  );
}
