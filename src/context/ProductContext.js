import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  return (
    <ProductContext.Provider
      value={{ products, setProducts, amount, setAmount }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
