import { ProductLine } from "../../components/productLine"

export const Cart = () => {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto">
        <ProductLine />
        <p className="font-bold mt-4">Total: R$1.000</p>
      </main>
    </>
  )
}
