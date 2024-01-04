import { atom } from "recoil";

export const themeState = atom<"dark" | "white">({
  key: "themeState",
  default: "dark", // TODO: localStroage에 저장된 값 사용, 없다면 사용자 OS환경에 맞춤 (default)
});
