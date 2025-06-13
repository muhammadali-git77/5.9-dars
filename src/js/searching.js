const input = document.getElementById("search");
const swpr = document.querySelector("swiper-container");

input.addEventListener("input", (e) => {
  const titles = document.querySelectorAll(".card-title");
  let value = e.target.value.toLowerCase();

  titles.forEach((title) => {
    if (title.textContent.toLowerCase().includes(value)) {
      title.parentElement.parentElement.style.display = "block";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }

    if (0 < value.length) {
      swpr.style.display = "none";
    } else {
      swpr.style.display = "block";
    }
  });
});
