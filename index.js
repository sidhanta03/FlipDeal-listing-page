const express = require('express');
const app = express();
const port = 3000;
let cors = require('cors');

app.use(cors());

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

//Endpoint 1: Get the products sorted by popularity
function sortProduct(prod1, prod2){
return prod2.rating - prod1.rating;
}

app.get("/products/sort/popularity", (req, res) => {
 let sortedProducts = products.slice().sort(sortProduct);
  res.json({ products: sortedProducts})
});

//Endpoint 2: Get the products sorted by “high-to-low” price
function sortPrice(price1, price2){
  return price2.price - price1.price
}

app.get("/products/sort/price-high-to-low", (req, res) => {
 let sortedPrice = products.slice().sort(sortPrice);
  res.json({ products: sortedPrice});
});

//Endpoint 3: Get the products sorted by “low-to-high” price
function sortPriceLowtoHigh(price1, price2){
  return price1.price - price2.price
}

app.get("/products/sort/price-low-to-high", (req, res) => {
 let sortedPriceLowtoHigh = products.slice().sort(sortPriceLowtoHigh);
  res.json({products: sortedPriceLowtoHigh});
});

//Endpoint 4: Filter the products based on the “RAM” option.
function filterByRam(prod, ram){
  return prod.ram === ram;
}

app.get("/products/filter/ram", (req, res) => {
  let ram = parseInt(req.query.ram);
  let result = products.filter(prod => filterByRam(prod, ram));
  res.json({ products: result});
});

//Endpoint 5: Filter the products based on the “ROM” option.
function filterByRom(prod, rom){
  return prod.rom === rom;
}

app.get("/products/filter/rom", (req, res) => {
  let rom = parseInt(req.query.rom);
  let result = products.filter(prod => filterByRom(prod, rom));
  res.json({ products: result});
});

//Endpoint 6: Filter the products based on the “Brand” option.
 function filterByBrand(prod, brand){
   return prod.brand.toLowerCase() === brand.toLowerCase();
 }

app.get("/products/filter/brand", (req, res) => {
  let brand = req.query.brand;
  let result = products.filter(prod => filterByBrand(prod, brand));
  res.json({products: result});
});

//Endpoint 7: Filter the products based on the “OS” option.
function filterByOs(prod, os){
  return prod.os.toLowerCase() === os.toLowerCase();
}

app.get("/products/filter/os", (req, res) => {
  let os = req.query.os;
  let result = products.filter(prod => filterByOs(prod, os));
  res.json({products: result});
});

//Endpoint 8: Filter the products based on the “Price” option.
function filterByPrice(prod, price){
  return prod.price <= price;
}

app.get("/products/filter/price", (req, res) => {
  let price = parseFloat(req.query.price);
  let result = products.filter(prod => filterByPrice(prod, price));
  res.json({ products: result });
});

//Endpoint 9: Send original array of products
app.get("/products", (req, res) => {
  res.json({ products: products});
})


app.listen(port, () => {
    console.log("Server is running on port " + port);
});