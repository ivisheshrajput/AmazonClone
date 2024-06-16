import { useState, useEffect } from "react";

interface ProductAll {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const useProducts = () => {
  const [products, setProducts] = useState<ProductAll[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const productData: ProductAll[] = await response.json();
      setProducts(productData);
    } catch (err) {
      console.error("Error in fetching products", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
};

export default useProducts;
