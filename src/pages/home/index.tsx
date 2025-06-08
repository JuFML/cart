import { ProductCard } from "../../components/productCard"

export const Home = () => {
  return (
    <>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <ProductCard />
        </section>
      </main>
    </>
  )
}
