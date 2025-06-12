import { BsCartPlus } from "react-icons/bs"
import { CartContext, type CartItem } from "../../contexts/CartContext"
import { useContext } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";

export interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string
}


export const ProductCard = (product: ProductCardProps) => {
  const { addItemCart } = useContext(CartContext)

  const handleAddCard = (product: ProductCardProps) => {
    const newProduct: CartItem = {
      ...product,
      amount: 1,
      total: product.price

    }
    addItemCart(newProduct)
    toast.success('Item adicionado com sucesso!', {
      style: {
        backgroundColor: "#121212",
        color: "#fff",
      }
    })
  }

  return (
    <article className="w-full flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img className="rounded-lg max-h-70 mb-2 mx-auto"
          src={product.cover}
          alt={product.title} />
        <p>{product.title}</p>
      </Link>
      <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
        <button className="bg-zinc-900 p-1 rounded cursor-pointer" onClick={() => handleAddCard(product)}>
          <BsCartPlus size={20} color="#FFF" />
        </button>
      </div>
    </article>
  )
}
