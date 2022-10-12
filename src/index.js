import { images, markdownStr } from "./libs/components";
// html-loader 
// 以下玩 html-loader 加載圖像解決方法
// https://stackoverflow.com/questions/67250804/html-loader-is-not-getting-correct-img-src-path
// document.body.insertAdjacentHTML('beforeend', images());
document.body.appendChild(markdownStr());