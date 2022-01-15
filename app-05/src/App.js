import Home from "./Pages/Home/"
import Cart from "./Pages/Cart/"
// ....

import "./styles.css"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Carrinho"} element={<Cart/>}/>
      </Routes>
    </Router>
  );
}