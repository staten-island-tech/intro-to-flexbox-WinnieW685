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
    name: "",
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
    category: "Pual Mitchell",
    image: "imges/FirmStyle.png",
    alt: "",
  },
];

//create a javascript array called items, each item shouldhave the following key , anme

function inject(item) {
  //query the container
  const container = document.querySelector(".container");
  const html = `<div class="card" data-title="${item.name}" >
        <h2 class="cardtitle" >${item.name}</h2>
        <img src=${item.image} alt="">
        <button class="add">Add to Cart</button>
        </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

products.forEach((product) => inject(product));

function addToCart() {
  const buttons = document.querySelectorAll(".add");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      console.log(event.target.closest(".card").getAttribute("data-title"));
      //find item in array
      //push item to cart
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
    });
  });
}
category();

function finding() {
  const  = products.filter(product => product.category === targetCategory);
}
finding();
