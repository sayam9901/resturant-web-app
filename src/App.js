import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
function App() {
  const [showCart, setShowCart] = useState(false);

  const HandlerToShow = () => {
    setShowCart(true);
  };
  const HandleToClose = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart onClose={HandleToClose}/>}

      <Header onShow={HandlerToShow}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
