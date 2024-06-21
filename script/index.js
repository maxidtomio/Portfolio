const $ = (selector) => document.querySelector(selector);

const textarea = $("textarea");
console.log(textarea);

function resize() {
  textarea.addEventListener("input", () => {
    textarea.style.height = "100px";
    textarea.style.height = textarea.scrollHeight + "px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  resize();
});
