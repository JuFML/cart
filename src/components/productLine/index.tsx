
interface ProductLineProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  amount: number
}

export const ProductLine = (product: ProductLineProps) => {
  return (
    <section className="flex items-center justify-between border-b-2 border-gray-300">
      <img
        src={product.cover}
        alt={product.title}
        className="w-28"
      />
      <strong>Preço: {product.price.toFixed(2)}</strong>
      <div className="flex items-center justify-center gap-3">
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">-</button>
        1
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">+</button>
      </div>

      <strong>SubTotal: {(product.price * product.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
    </section>
  )
}
