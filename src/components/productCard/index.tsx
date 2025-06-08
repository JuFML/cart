import { BsCartPlus } from "react-icons/bs"

interface ProductCardProps {
  title: string;
  price: number;
  cover: string
}


export const ProductCard = ({ title, price, cover }: ProductCardProps) => {
  return (
    <article className="w-full flex flex-col">
      <img className="rounded-lg max-h-70 mb-2 mx-auto"
        src={cover}
        alt={title} />
      <p>{title}</p>
      <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
        <button className="bg-zinc-900 p-1 rounded">
          <BsCartPlus size={20} color="#FFF" />
        </button>
      </div>
    </article>
  )
}
