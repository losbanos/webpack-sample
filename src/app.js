// import { sum } from "./math";
import "./css/base.css";
import "./scss/normalize.scss";
import seoyeji from "./images/seoyeji2.jpeg";
import result from "./result";

document.addEventListener("DOMContentLoaded", async () => {
  const img = document.createElement("img");
  img.src = seoyeji;
  document.getElementById("main").appendChild(img);

  const main = document.querySelector("#main");
  const str = await result.render();
  main.insertAdjacentHTML("beforeend", str);

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

// console.log(sum(10, 15));
// console.log("process.env.NODE_ENV =", process.env.NODE_ENV);
// console.log("TWO =", TWO);
// console.log("api.domain =", api.domain);
const p = new Promise((resolve) => {
  resolve("111");
});

console.log(p);
console.log("abc");
console.log()(function () {})();
