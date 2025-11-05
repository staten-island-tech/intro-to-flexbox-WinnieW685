const products = [
  {
    name: "Glycoic Gloss",
    price: 19.99,
    inStock: true,
    category: "Loreal",
    image: "imges/GlycolicGloss.png",
    alt: "",
  },
  {
    name: "Ever Pure",
    price: 23.99,
    inStock: true,
    category: "Loreal",
    image: "imges/EverPure.png",
    alt: "",
  },
  {
    name: "Water Treatment",
    price: 26.75,
    inStock: true,
    category: "Tsubaki",
    image: "imges/WaterTreatment.png",
    alt: "",
  },
  {
    name: "Conditioner",
    price: 14.99,
    inStock: true,
    category: "Tsubaki",
    image: "imges/TsubakiConditioner.png",
    alt: "",
  },
  {
    name: "Premium Touch",
    price: 17.99,
    inStock: true,
    category: "Fino",
    image: "imges/PremiumTouch.png",
    alt: "",
  },
  {
    name: "Hair Mask",
    price: 13.0,
    inStock: true,
    category: "Fino",
    image: "imges/HairMask.png",
    alt: "",
  },
  {
    name: "Shampoo & Conditioner",
    price: 24.5,
    inStock: true,
    category: "Pantene",
    image: "imges/ShampooAndConditioner.png",
    alt: "",
  },
  {
    name: "Shampoo",
    price: 11.0,
    inStock: true,
    category: "Pantene",
    image: "imges/PanteneShampoo.png",
    alt: "",
  },
  {
    name: "Advance Scalp Care",
    price: 6.99,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/AdvanceScalpCare.png",
    alt: "",
  },
  {
    name: "White Charcoal Conditioner",
    price: 12.99,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/WhiteCharcoal.png",
    alt: "",
  },
  {
    name: "Hair Perfector",
    price: 26.75,
    inStock: true,
    category: "Olaplex",
    image: "imges/HairPerfector.png",
    alt: "",
  },
  {
    name: "Intensive Bond Building Hair Treatment",
    price: 25.5,
    inStock: true,
    category: "Olaplex",
    image: "imges/IntensiveBondBuilding.png",
    alt: "",
  },
  {
    name: "Biotin & Collagen",
    price: 16.99,
    inStock: true,
    category: "OGX",
    image: "imges/BiotinAndCollagen.png",
    alt: "",
  },
  {
    name: "Coconut Oil Mist",
    price: 19.5,
    inStock: true,
    category: "OGX",
    image: "imges/CoconutOil.png",
    alt: "",
  },
  {
    name: "Coconut Milk Shampoo",
    price: 29.25,
    inStock: true,
    category: "OGX",
    image: "imges/CoconutMilkShampoo.png",
    alt: "",
  },
  {
    name: "Curl Enhancing",
    price: 17.5,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/CurlEnhancingSmoothie.png",
    alt: "",
  },
  {
    name: "Moisture Intensive Hydration Shampoo",
    price: 14.99,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/SheaMoistureIntensiveHydrationShampoo.png",
    alt: "",
  },
  {
    name: "The Detangler",
    price: 20.5,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/TheDetangler.png",
    alt: "",
  },
  {
    name: "Sheer Hydration Shampoo",
    price: 22.99,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/SheerHydrationShampoo.png",
    alt: "",
  },
  {
    name: "Firm Style",
    price: 21.25,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/FirmStyle.png",
    alt: "",
  },
];
let cart = [];
//create a javascript array called items, each item shouldhave the following key , anme

function inject(item) {
  //query the container
  const container = document.querySelector(".container");
  const html = `<div class="card" data-title= "${item.name}" data-category="${item.category}" data-price="${item.price}">
        <h2 class="cardtitle" >${item.name}</h2>
        <img src=${item.image} alt="">
        <h4 class="prices" >$${item.price} </h4>
        <button class="add">Add to Cart</button>
        </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}
function showCart(item) {
  const cart = document.querySelector(".cart");
  const html = `<div class="cart">
        <h4 class="cartcardtitle" >${item.name} </h4>
        <h4 class="cartcardprice" >$${item.price} </h4>
        </div>`;
  cart.insertAdjacentHTML("afterbegin", html);
}
let cartTotal = 0;
function total() {
  cartTotal = 0;
  cart.forEach((item) => (cartTotal = cartTotal + item.price));
  console.log(cartTotal.toFixed(2));
  const container = document.querySelector(".cart");
  //
  const oldTotal = container.querySelector(".TotalPrice");
  if (oldTotal) {
    oldTotal.remove();
  }
  const html = `<div class="TotalPrice">
  <h1>Total</h1>
  <h4> ${cartTotal.toFixed(2)}</h4></div>`;
  container.insertAdjacentHTML("beforeend", html);
}
products.forEach((product) => inject(product));

function addToCart() {
  const buttons = document.querySelectorAll(".add");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      const name = event.target.closest(".card").getAttribute("data-title");
      console.log(event.target.closest(".card").getAttribute("data-title"));
      const p = products.find((product) => product.name === name);
      console.log("found");
      cart.push(p);
      total();
      showCart(p);
      //find item in = done
      //push item to cart= done
      //total cart
      //show cart
    })
  );
}
addToCart();

function category() {
  const allButtons = document.querySelectorAll(".category");
  allButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      const category = event.target.textContent.trim();
      filterByBrand(category);
    });
  });
}
category();

function filterByBrand(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    if (category === cardCategory) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
