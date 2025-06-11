import { createContext, useEffect, useState, type ReactNode } from "react";

interface CartContextData {
  cart: CartItem[];
  cartAmount: number;
  cartTotal: number;
  addItemCart: (newItem: CartItem) => void;
  removeItemCart: (itemId: number) => void;
}

export interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext([] as unknown as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  console.log("cartTotal", cartTotal)

  const addItemCart = (newItem: CartItem) => {
    const indexItem = cart.findIndex((item) => newItem.id === item.id)

    if (indexItem !== -1) {
      const listCard = [...cart]
      listCard[indexItem].amount = listCard[indexItem].amount + 1
      listCard[indexItem].total = listCard[indexItem].amount * listCard[indexItem].price
      setCart(listCard)
      return
    }
    setCart((products) => [...products, newItem])
  }

  const removeItemCart = (itemId: number) => {
    const listCard = [...cart]
    const indexItem = cart.findIndex((item) => itemId === item.id)

    if (listCard[indexItem].amount > 1) {
      listCard[indexItem].amount = listCard[indexItem].amount - 1
      listCard[indexItem].total = listCard[indexItem].amount * listCard[indexItem].price
      setCart(listCard)
      return
    }
    setCart(listCard.filter(item => item.id !== itemId))
  }

  const updateCartTotal = () => {
    setCartTotal(cart.reduce((acc, current) => acc + current.total, 0))
  }

  useEffect(() => {
    updateCartTotal()
  }, [cart])



  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, cartTotal, addItemCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;