// import { sum } from "./math";
import "./css/base.css";
import "./scss/normalize.scss";
import seoyeji from "./images/seoyeji2.jpeg";
import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const img = document.createElement("img");
  img.src = seoyeji;
  document.getElementById("main").appendChild(img);

  const res = await axios.get("/api/users");
  const str = (res.data || [])
    .map((item) => {
      return `<div>id: ${item.id}, Name: ${item.name}</div>`;
    })
    .join("");
  document.querySelector("#main").insertAdjacentHTML("beforeend", str);
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
