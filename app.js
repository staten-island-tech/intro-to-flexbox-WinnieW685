const products = [
 {
    name: "fhgj",
    price: 19.99,
    inStock: true,
    category: "Loreal",
    image: "imges/Screenshot 2025-10-08 092600.png",
    alt: ""
 },
  {
    name: "",
    price: 23.99,
    inStock: true,
    category: "Loreal",
    image: "imges/Screenshot 2025-10-08 092618.png",
    alt: ""
 },
  {
    name: "",
    price: 26.75,
    inStock: true,
    category: "Tsubaki",
    image: "imges/Screenshot 2025-10-08 092713.png",
    alt: ""
 },
  {
    name: "",
    price: 14.99,
    inStock: true,
    category: "Tsubaki",
    image: "imges/Screenshot 2025-10-08 092726.png",
    alt: ""
 },
  {
    name: "",
    price: 17.99,
    inStock: true,
    category: "Fino",
    image: "imges/Screenshot 2025-10-08 092747.png",
    alt: ""
 },
  {
    name: "",
    price: 13.00,
    inStock: true,
    category: "Fino",
    image: "imges/Screenshot 2025-10-08 092811.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Pantene",
    image: "imges/Screenshot 2025-10-08 092822.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Pantene",
    image: "imges/Screenshot 2025-10-08 092846.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/Screenshot 2025-10-08 092910.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Head & Shoulders",
    image: "imges/Screenshot 2025-10-08 092926.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Olaplex",
    image: "imges/Screenshot 2025-10-08 093004.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Olaplex",
    image: "imges/Screenshot 2025-10-08 093017.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085332.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085351.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "OGX",
    image: "imges/Screenshot 2025-10-09 085413.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/Screenshot 2025-10-09 090144.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Shea Moisture",
    image: "imges/Screenshot 2025-10-09 090132.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/Screenshot 2025-10-09 085606.png",
    alt: ""
 }, 
  {
    name: "",
    price: ,
    inStock: true,
    category: "Paul Mitchell",
    image: "imges/Screenshot 2025-10-09 085538.png",
    alt: ""
 },
  {
    name: "",
    price: ,
    inStock: true,
    category: "Pual Mitchell",
    image: "imges/Screenshot 2025-10-09 085525.png",
    alt: ""
 },

]

items.forEach((item) => makeCard(item))
function makeCard(item)

//create a javascript array called items, each item shouldhave the following key , anme

function inject(item) {
   //query the container
   const container = document.querySelector(".container");
   container.insertAdjacentHTML("afterbeing", `<h1>${item.name}</h1>`)
}
products.forEach((product) => inject(product));
inject(items[0]);
inject(items[0]);
inject(products[0]);