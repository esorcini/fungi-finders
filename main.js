const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("primary-nav");

navToggle.addEventListener("click", () => {
  console.log("Clicked nav toggle");
  const aria_attr = navToggle.getAttribute("aria-expanded");
  console.log("Aria before click ", aria_attr);

  if (aria_attr === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }

  console.log("Aria after click ", navToggle.getAttribute("aria-expanded"));
});
