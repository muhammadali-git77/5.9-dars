import { formatNumber } from "./formatNumber.js";

const products = JSON.parse(localStorage.getItem("nestedArray"));
// console.log(products);

let template = document.querySelector("#cards");
let productList = document.querySelector("#product-list");

products.map((product) => {
  let clone = template.content.cloneNode(true);

  const {
    id,
    title,
    description,
    thumbnail,
    price: _price,
    rating: _rating,
    discountPercentage,
    reviews,
  } = product;

  let cardImage = clone.querySelector(".card-image");
  let li = clone.querySelector("li");
  let cardTitle = clone.querySelector(".card-title");
  let rating = clone.querySelector(".rating");
  let desc = clone.querySelector(".desc");
  let price = clone.querySelector(".price");
  let discountPrice = clone.querySelector(".discount-price");

  li.dataset.id = id;
  cardImage.src = thumbnail;
  cardTitle.textContent = title;
  desc.textContent = description;
  rating.textContent = `⭐ ${_rating} (${reviews.length} ta sharhlar)`;
  price.textContent = `$${_price}`;
  discountPrice.textContent = formatNumber(_price, discountPercentage);

  productList.appendChild(clone);
});

let removeBtns = document.querySelectorAll("#shopping");

removeBtns.forEach((shop) => {
  shop.addEventListener("click", () => {
    const id = shop.parentElement.parentElement.parentElement;

    const cardItem = products.find((product) => product.id == id.dataset.id);

    let arr = JSON.parse(localStorage.getItem("nestedArray")) || [];

    const isExist = arr.some((item) => item.id == cardItem.id);

    if (!isExist) {
      arr.remove(cardItem);
    }

    localStorage.setItem("nestedArray", JSON.stringify(arr));
  });
});
