import { RouterProvider } from "react-router"
import { router } from "./routes/router"
import CartProvider from "./contexts/CartContext"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </CartProvider>
    </>
  )
}

export default App
