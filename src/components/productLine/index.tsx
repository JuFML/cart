import { useContext } from "react";
import { CartContext, type CartItem } from "../../contexts/CartContext"
interface ProductLineProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  amount: number
  description: string
}

export const ProductLine = (product: ProductLineProps) => {
  const { addItemCart, removeItemCart } = useContext(CartContext)

  const handleAddCard = (product: ProductLineProps) => {
    const newProduct: CartItem = {
      ...product,
      amount: 1,
      total: product.price

    }
    addItemCart(newProduct)
  }


  return (
    <section className="flex items-center justify-between border-b-2 border-gray-300">
      <img
        src={product.cover}
        alt={product.title}
        className="w-28"
      />
      <strong>Preço: {product.price.toFixed(2)}</strong>
      <div className="flex items-center justify-center gap-3">
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => removeItemCart(product.id)}>-</button>
        {product.amount}
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => handleAddCard(product)}>+</button>
      </div>

      <strong>SubTotal: {(product.price * product.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
    </section>
  )
}
