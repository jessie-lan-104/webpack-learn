const img_str = require("../index.html");
const md = require("../index.md");

export function images() {
    return img_str;
}

// 將 markdown 編譯為 HTML
export function markdownStr() {
    const el = document.getElementById("app");
    el.innerHTML = md.default;
    return el;
}