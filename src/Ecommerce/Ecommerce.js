import React, { createContext, useState } from "react";
import { Products } from "./Products";
import { Cart } from "./Cart";

export const ThemeContext = createContext("yellow");

export const Ecommerce = () => {
  const [containerBackgroundColor, setContainerBackgroundColor] = useState("gray");
  return (
    <ThemeContext.Provider
      value={{ backgroundColor: "yellow", color: "black", changeConBackColor: (color) => setContainerBackgroundColor(color) }}
    >
      <div className="container-fluid" style={{ backgroundColor: containerBackgroundColor }}>
        <div className="row">
          <Products />
          <Cart />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
