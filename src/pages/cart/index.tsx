import { useContext } from "react"
import { ProductLine } from "../../components/productLine"

import { CartContext, type CartItem } from "../../contexts/CartContext"
import { Link } from "react-router"

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log("cart", cart)

  return (
    <main className="w-full max-w-7xl mx-auto">
      {cart.length !== 0 ? (
        <>
          {
            cart.map((item: CartItem) => (
              <ProductLine key={item.id} id={item.id} title={item.title} price={item.price} cover={item.cover} amount={item.amount} />
            ))
          }


          <p className="font-bold mt-4">Total: R$1.000</p>
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
