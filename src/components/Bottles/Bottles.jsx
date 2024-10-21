import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div>
      <h2>Bottles here: {bottles.length}</h2>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
