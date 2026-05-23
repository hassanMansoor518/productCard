import React from "react";
import ProductCard from "./components/Product";
import "./App.css";

function App() {
  const products = [
    {
      id: "product-1",
      title: "GROCERIES",
      collection: "COLLECTION",
      image: "./images/1.png",
      discount: 50,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-2",
      title: "PERFUME",
      collection: "COLLECTION",
      image: "./images/2.png",
      discount: 75,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-3",
      title: "BEST LAPTOP",
      collection: "COLLECTION",
      image: "https://th.bing.com/th?q=Laptop+without+Background+Small&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247",
      discount: 50,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-4",
      title: "BLACK SHOES",
      collection: "COLLECTION",
      image: "./images/img1.png",
      discount: 50,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-5",
      title: "GRAY SHOES",
      collection: "COLLECTION",
      image: "./images/img2.png",
      discount: 49,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-6",
      title: "BEST SHOES",
      collection: "COLLECTION",
      image: "./images/img3.png",
      discount: 30,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-7",
      title: "AIRBUD",
      collection: "COLLECTION",
      image: "./images/1.webp",
      discount: 70,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-8",
      title: "BEST LAPTOP-2",
      collection: "COLLECTION",
      image: "https://th.bing.com/th?q=Laptop+without+Background+Small&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247",
      discount: 56,
      bgColor: "linear-gradient(to bottom, #fcfcfcff, #ffffffff)",
    },
    {
      id: "product-9",
      title: "BEST MOBILE",
      collection: "COLLECTION",
      image: "./images/box4_image.jpg",
      discount: 39,
      bgColor: "linear-gradient(to bottom, #ffffffff, #ffffffff)",
    },
    {
      id: "product-10",
      title: "GROCERIES-2",
      collection: "COLLECTION",
      image: "./images/1.png",
      discount: 20,
      bgColor: "linear-gradient(to bottom, #edededff, #ffffffff)",
    },
  ];

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;