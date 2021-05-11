// import { sum } from "./math";
import "./css/base.css";
import "./scss/normalize.scss";
import seoyeji from "./images/seoyeji2.jpeg";
// import result from "./result";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("module = ", module);
  console.log("module.hot = ", module.hot);
  const img = document.createElement("img");
  img.src = seoyeji;
  document.getElementById("main").appendChild(img);

  let result = "";

  const main = document.querySelector("#main");
  import(/* webpackChunkName: "resultChunk" */ "./result").then(
    async (module) => {
      result = module.default;
      const str = await result.render();
      main.insertAdjacentHTML("beforeend", str);
    }
  );
  if (module.hot) {
    console.log("핫 모듈 ON !");

    module.hot.accept("./result", async () => {
      const str = await result.render();
      const list = main.querySelector("#list");
      list.innerHTML = "";
      list.insertAdjacentHTML("beforeend", str);
    });
  }
});

// console.log("process.env.NODE_ENV =", process.env.NODE_ENV);
// console.log("TWO =", TWO);
// console.log("api.domain =", api.domain);
const p = new Promise((resolve) => {
  resolve("111");
});

console.log(p);
console.log("abc");
console.log()(function () {})();
