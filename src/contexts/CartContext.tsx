import { createContext, useState, type ReactNode } from "react";

interface CartContextData {
  cart: CartItem[];
  cartAmount: number;
  addItemCard: (newItem: CartItem) => void;
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
  console.log(cart)

  const addItemCard = (newItem: CartItem) => {
    console.log("newItem", newItem)
    const indexItem = cart.findIndex((item) => newItem.id === item.id)

    if (indexItem !== -1) {
      const listCard = [...cart]
      listCard[indexItem].amount = listCard[indexItem].amount + 1
      listCard[indexItem].total = listCard[indexItem].amount * listCard[indexItem].price
      return
    }
    setCart((products => [...products, newItem]))
  }

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCard }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;