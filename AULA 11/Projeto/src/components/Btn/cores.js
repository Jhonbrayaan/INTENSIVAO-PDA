import { btn_purple, btn_red } from "./btn.module.css";

export function cores(color) {
  if (color === "red") {
    return btn_red;
  } else {
    return btn_purple;
  }
}
