import { cores } from "./cores.js";

export default function Btn(props) {
  return <button className={cores(props.color)}>{props.texto}</button>;
}
