import { useContext } from "react"
import { ProductLine } from "../../components/productLine"

import { CartContext, type CartItem } from "../../contexts/CartContext"
import { Link } from "react-router"

export const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext)

  return (
    <main className="w-full max-w-7xl mx-auto">
      {cart.length !== 0 ? (
        <>
          {
            cart.map((item: CartItem) => (
              <ProductLine key={item.id} {...item} />
            ))
          }


          <p className="font-bold mt-4">Total: {cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </>
      ) :
        (
          <div className="flex flex-col items-center justify-center">
            <p className="font-medium">OPS SEU CARRINHO ESTÁ VAZIO...</p>
            <Link className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded" to="/">Acessar produtos</Link>
          </div>
        )
      }


    </main>
  )
}
