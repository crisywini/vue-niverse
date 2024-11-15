import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
//import "./basics/01-const-let";
//import "./basics/02-object";
//import "./basics/03-arrays";
//import "./basics/04-functions";
//import "./basics/05-deses-obj";
import "./basics/06-deses-arr";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>

  </div>
`;
