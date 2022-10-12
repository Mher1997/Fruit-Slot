import "./index.scss";

class Header {
  render(name) {
    const div = document.createElement("div");
    div.classList.add("header");

    const h1 = document.createElement("h1");
    h1.innerText = name || "Page #";

    div.appendChild(h1);
    document.querySelector("body").appendChild(div);
  }
}

export default new Header();
