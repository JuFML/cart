import { BsCartPlus } from "react-icons/bs"
import { CartContext, type CartItem } from "../../contexts/CartContext"
import { useContext } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string
}


export const ProductCard = (product: ProductCardProps) => {
  const { addItemCard } = useContext(CartContext)

  const handleAddCard = (product: ProductCardProps) => {
    const newProduct: CartItem = {
      ...product,
      amount: 1,
      total: product.price

    }
    addItemCard(newProduct)
  }

  return (
    <article className="w-full flex flex-col">
      <img className="rounded-lg max-h-70 mb-2 mx-auto"
        src={product.cover}
        alt={product.title} />
      <p>{product.title}</p>
      <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
        <button className="bg-zinc-900 p-1 rounded" onClick={() => handleAddCard(product)}>
          <BsCartPlus size={20} color="#FFF" />
        </button>
      </div>
    </article>
  )
}
