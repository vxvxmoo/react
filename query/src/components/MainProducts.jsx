import React, { useState } from "react";
import Products from "./Products";

export default function MainProducts() {
  const [showLeftProducts, setshowLeftProducts] = useState(true);
  const [showRightProducts, setshowRightProducts] = useState(true);

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
    </main>
  );
}
