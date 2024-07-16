import React, { useState } from "react";
import Products from "./Products";
import "../App.css";
import { useQueryClient } from "@tanstack/react-query";

export default function MainProducts() {
  const [showLeftProducts, setshowLeftProducts] = useState(true);
  const [showRightProducts, setshowRightProducts] = useState(true);
  const client = useQueryClient();

  return (
    <main className="container">
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setshowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setshowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries({ queryKey: ["products", false] });
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
