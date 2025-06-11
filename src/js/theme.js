// THEME START
const html = document.documentElement;
const themeTogglers = document.querySelector("#theme-toggler");

const gradient = document.querySelector(".gradient");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme;

  themeTogglers.checked = savedTheme === "night";
}

themeTogglers.addEventListener("click", () => {
  const newTheme = html.dataset.theme === "light" ? "night" : "light";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);

  if (newTheme == "night") {
    gradient.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.7) 75%, oklch(20.768% 0.039 265.754) 99%)";
  } else {
    gradient.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.7) 75%, white 99%)";
  }

  themeTogglers.checked = newTheme === "night";
});

// THEME END
