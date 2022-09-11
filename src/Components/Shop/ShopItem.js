import React from "react";
import ShopItemList from "./ShopItemList";
import "../styles/ShopItem.css";

const DUMY_PRODUCTS = [
  {
    id: "p1",
    price: 23,
    title: "Levi's Jeans",
    description: "One of the world's largest apparel companies.",
  },
  {
    id: "p2",
    price: 30,
    title: "Blackberry Tshirt",
    description: "one of the world's largest apparel companies.",
  },
  {
    id: "p3",
    price: 28,
    title: "Zara Dress",
    description: "Party dresses take on a fresh new mood in our occasion.",
  },
  {
    id: "p4",
    price: 20,
    title: "Spykar Jeans",
    description:
      "Spykar - India's finest Jeans wear and casual wear brand for the youth.",
  },
  {
    id: "p5",
    price: 900,
    title: "Iphone 14",
    description:
      "We build Apple Iphones to empower everyone. Premium as always.",
  },
  {
    id: "p6",
    price: 260,
    title: "Samsung TV",
    description:
      "Samsung SMART TV is a television set with integrated Internet capabilities.",
  },
  {
    id: "p7",
    price: 35,
    title: "Penaut Butter",
    description:
      "Peanut butter is a food paste or spread made from ground, dry-roasted peanuts.",
  },
];

const ShopItem = () => {
  return (
    <section>
      <article className="shop">
        <p>
          "Whoever said that money can't buy happiness simply didn't know where
          to go shopping."
        </p>
        <h3>
          Everday is is shopping day with{" "}
          <span>
            <h1>ShopCart</h1>
          </span>
        </h3>
      </article>
      <ul>
        {DUMY_PRODUCTS.map((item) => (
          <ShopItemList
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ShopItem;
