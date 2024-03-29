import type { Metadata } from "next";

// styles
import "@/styles/global.scss";
import { IBM_Plex_Sans_KR } from "next/font/google";

// recoil
import RecoilRootProvider from "@/lib/recoil/recoilRootProvider";

export const metadata: Metadata = {
  title: "임동윤 포트폴리오",
  description: "세상을 윤택하게 만드는 프론트엔드 개발자 임동윤입니다.",
  openGraph: {
    images: [
      { url: "https://dongyoun-yim.vercel.app/myImages/profile_black.jpg" },
      { url: "https://dongyoun-yim.vercel.app/myImages/profile_white.jpg" },
    ],
  },
};

const ibm_sans = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 즉시 실행함수로 감싸서 페이지가 렌더링될때 바로 실행되도록함
  const themeInitializerScript = `(function() {
    (${setInitialColorMode.toString()})()
    })()
  `;

  // 초기 테마를 설정하는 함수
  function setInitialColorMode() {
    function getInitialColorMode() {
      // 로컬스토리지에서 'theme' 값 가져오기
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (hasPersistedPreference) {
        return persistedPreferenceMode;
      }

      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    //현재 테마 모드
    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
    if (currentColorMode === "dark")
      document.body.setAttribute("data-theme", "dark");

    if (currentColorMode === "light")
      document.body.setAttribute("data-theme", "light");
  }

  return (
    <html lang="ko" className={`${ibm_sans.className}`}>
      <body suppressHydrationWarning={true}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        />
        <RecoilRootProvider>
          <main className="wrapper">{children}</main>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
