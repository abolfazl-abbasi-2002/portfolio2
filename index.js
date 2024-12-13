function btn() {
  const main = document.getElementById("main");
  const btn = document.getElementById("ham-btn");
  const nav = document.getElementById("ham-nav");
  if (btn.classList.contains("fa-bars")) {
    main.classList.add("blur");
    nav.style.display = "flex";
    btn.classList.remove("fa-bars");
    btn.classList.add("fa-xmark");
  } else {
    main.classList.remove("blur");
    nav.style.display = "none";
    btn.classList.remove("fa-xmark");
    btn.classList.add("fa-bars");
  }
}
function btn2() {
  const main = document.getElementById("main");
  const nav = document.getElementById("ham-nav");
  const btn = document.getElementById("ham-btn");
  if (true) {
    btn.classList.remove("fa-xmark");
    btn.classList.add("fa-bars");
    nav.style.display = "none";
    main.classList.remove("blur");
  }
}
