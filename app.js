const products = [
  {
    name: "fhgj",
    price: 19.99,
    inStock: true,
    category: "Loreal",
    image: "imges/GlycolicGloss.png",
    alt: "",
  },
  {
    name: "zxcv",
    price: 23.99,
    inStock: true,
    category: "Loreal",
    image: "imges/EverPure.png",
    alt: "",
  },
  {
    name: "zxcv",
    price: 26.75,
    inStock: true,
    category: "Tsubaki",
    image: "imges/WaterTreatment.png",
    alt: "",
  },
  {
    name: "zxcv",
    price: 14.99,
    inStock: true,
    category: "Tsubaki",
    image: "imges/TsubakiConditioner.png",
    alt: "",
  },
  {
    name: "zxcv",
    price: 17.99,
    inStock: true,
    category: "Fino",
    image: "imges/PremiumTouch.png",
    alt: "",
  },
  {
    name: "",
    price: 13.0,
    inStock: true,
    category: "Fino",
    image: "imges/Screenshot 2025-10-08 092811.png",
    alt: "",
  },
  {
    name: "",
    price: 24.5,
    inStock: true,
    category: "Pantene",
    image: "imges/Screenshot 2025-10-08 092822.png",
    alt: "",
  },
  {
    name: "",
    price: 11.0,
    inStock: true,
    category: "Pantene",
    image: "imges/Screenshot 2025-10-08 092846.png",
    alt: "",
  },
  {
    name: "",
    price: 6.99,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/Screenshot 2025-10-08 092910.png",
    alt: "",
  },
  {
    name: "",
    price: 12.99,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/Screenshot 2025-10-08 092926.png",
    alt: "",
  },
  {
    name: "",
    price: 26.75,
    inStock: true,
    category: "Olaplex",
    image: "imges/Screenshot 2025-10-08 093004.png",
    alt: "",
  },
  {
    name: "",
    price: 25.5,
    inStock: true,
    category: "Olaplex",
    image: "imges/Screenshot 2025-10-08 093017.png",
    alt: "",
  },
  {
    name: "",
    price: 16.99,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085332.png",
    alt: "",
  },
  {
    name: "",
    price: 19.5,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085351.png",
    alt: "",
  },
  {
    name: "",
    price: 29.25,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085413.png",
    alt: "",
  },
  {
    name: "",
    price: 17.5,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/Screenshot 2025-10-09 090144.png",
    alt: "",
  },
  {
    name: "",
    price: 14.99,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/Screenshot 2025-10-09 090132.png",
    alt: "",
  },
  {
    name: "",
    price: 20.5,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/Screenshot 2025-10-09 085606.png",
    alt: "",
  },
  {
    name: "",
    price: 22.99,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/Screenshot 2025-10-09 085538.png",
    alt: "",
  },
  {
    name: "",
    price: 21.25,
    inStock: true,
    category: "Pual Mitchell",
    image: "imges/Screenshot 2025-10-09 085525.png",
    alt: "",
  },
];

//create a javascript array called items, each item shouldhave the following key , anme

function inject(item) {
  //query the container
  const container = document.querySelector(".container");
  const html = `<div class="card">
        <h2 class="cardtitle">${item.name}</h2>
        <img src=${item.image} alt="">
        </div>`;
  container.insertAdjacentHTML("afterbegin", `<h1>${item.name}</h1>`);
}
products.forEach((product) => inject(product));
