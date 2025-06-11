import { products, banners } from "./data.js";

let template = document.querySelector("#cards");
let productList = document.querySelector("#product-list");

products.map((product) => {
  let clone = template.content.cloneNode(true);

  let cardImage = clone.querySelector(".card-image");
  let li = clone.querySelector("li");
  let cardTitle = clone.querySelector(".card-title");
  let rating = clone.querySelector(".rating");
  let desc = clone.querySelector(".desc");
  let price = clone.querySelector(".price");
  let discountPrice = clone.querySelector(".discount-price");

  li.dataset.id = product.id;
  cardImage.src = product.thumbnail;
  cardTitle.textContent = product.title;
  desc.textContent = product.description;
  rating.textContent = `⭐ ${product.rating} (${product.reviews.length} ta sharhlar)`;
  price.textContent = `$${product.price}`;
  discountPrice.textContent = `$${Number(
    product.price - (product.price / 100) * product.discountPercentage
  ).toFixed(2)}`;

  productList.appendChild(clone);
});

// BANNER
let bannerT = document.querySelector("#banner");
let swContainer = document.querySelector("swiper-container");

banners.map((banner) => {
  let clone = bannerT.content.cloneNode(true);

  let a = clone.querySelector("#banner-href");
  let image = clone.querySelector("#banner-image");

  a.href = banner.url;
  image.src = banner.imgUrl;

  swContainer.appendChild(clone);
});

let shopBtns = document.querySelectorAll("#shopping");

shopBtns.forEach((shop) => {
  shop.addEventListener("click", () => {
    const id = shop.parentElement.parentElement.parentElement;

    const cardItem = products.filter((product) => product.id == id.dataset.id);

    // SHOP BTN davom etmoqda ...
  });
});
