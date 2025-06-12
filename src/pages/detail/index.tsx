import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { api } from "../../services/api"
import { BsCartPlus } from "react-icons/bs"
import type { ProductCardProps } from "../../components/productCard"
import type { ProductProps } from "../home"
import { CartContext, type CartItem } from "../../contexts/CartContext"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductProps>()
  const { addItemCart } = useContext(CartContext)
  const navigate = useNavigate()


  const getProductById = async (id: string | undefined) => {
    if (!id) return
    const response = await api.get('/products-cart-project.json')
    setProduct(response.data.products.find((item: ProductProps) => item.id === Number(id)))
  }

  const handleAddCard = (product: ProductCardProps) => {
    const newProduct: CartItem = {
      ...product,
      amount: 1,
      total: product.price

    }
    addItemCart(newProduct)
    navigate("/cart")
  }

  useEffect(() => {
    getProductById(id)
  }, [id])

  return (
    <>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product &&

          <section className="w-full flex flex-col md:flex-row">
            <img src={product.cover} className="flex-1 w-full max-h-72 object-contain" />
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-2xl mt-4 mb-2">{product.title}</h3>
              <p className="my-4">{product.description}</p>
              <div className="flex items-center">
                <strong className="text-zinc-700/90 text-xl">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
                <button className="bg-zinc-900 p-1 rounded cursor-pointer ml-3" onClick={() => handleAddCard(product)}>
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </div>
          </section>
        }
      </main>
    </>
  )
}

export { ProductDetail }