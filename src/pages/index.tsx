import Banner from "@/components/Banner";
import Product from "@/components/Product";
import useProducts from "@/hooks/useProducts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { products } = useProducts();
  return (
    <>
      <main>
        <Banner />
        <div className="-mt-8">
          <Product products={products} />
        </div>
      </main>
    </>
  );
}
