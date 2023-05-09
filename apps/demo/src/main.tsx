import Showcase from "./components/showcase";
import { render } from "solid-js/web";
import "./style.css";

render(() => <Showcase />, document.getElementById("app") as HTMLElement);
