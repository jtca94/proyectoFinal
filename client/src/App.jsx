import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/HomePage/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import Productos from "./pages/Productos/Productos";
import Carro from "./pages/Carro/Carro";


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/pedidos" element={<Carro/>} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
