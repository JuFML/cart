import { useEffect, useState } from "react"
import { ProductCard } from "../../components/productCard"
import { api } from "../../services/api";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string
}

export const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([])

  const getProducts = async () => {
    const response = await api.get('/products-cart-project.json')
    setProducts((response.data.products))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.length > 0 &&
            products.map(({ id, title, price, cover }) => (
              <ProductCard key={id} title={title} price={price} cover={cover} />
            ))
          }
        </section>
      </main>
    </>
  )
}
