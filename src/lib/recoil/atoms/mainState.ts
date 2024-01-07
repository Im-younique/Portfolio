import { atom } from "recoil";

// types
import { TMainExpand } from "@/types";

export const mainState = atom<TMainExpand>({
  key: "mainState",
  default: "none",
});
