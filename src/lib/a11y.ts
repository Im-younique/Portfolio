import { KeyboardEvent } from "react";

/**
 * onClick 을 가진 비버튼 요소에 Enter/Space 키보드 활성화를 부여하는 헬퍼.
 * `role="button"` `tabIndex={0}` 와 함께 사용한다.
 *
 * @example
 * <div role="button" tabIndex={0} onClick={fn} onKeyDown={onActivate(fn)} />
 */
export const onActivate =
  (handler: () => void) =>
  (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handler();
    }
  };
