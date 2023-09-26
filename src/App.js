import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);

  const HandlerToShow = () => {
    setShowCart(true);
  };
  const HandleToClose = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={HandleToClose}/>}

      <Header onShow={HandlerToShow}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
