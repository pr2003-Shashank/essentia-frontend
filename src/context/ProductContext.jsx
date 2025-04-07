import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { data: products = [], isLoading, error } = useProducts();

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
