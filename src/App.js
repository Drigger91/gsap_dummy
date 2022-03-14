import logo from "./logo.svg";
import "./App.css";
import Gsap from "./components/gsap";
import Gsapad from "./components/gsapad";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ExitAnim from "./components/exit";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div id="main">
      <div id="anim-basic">
        {" "}
        <h1>Basic animations using Gsap</h1>
        <Gsap />
      </div>
      <div id="anim-adv">
        <h1>Slightly advanced animations</h1>
        <Gsapad />
      </div>
      <div id="anim-exit">
      <h1>Exit Animations</h1>
        <ExitAnim/>
      </div>
    </div>
  );
}

export default App;
