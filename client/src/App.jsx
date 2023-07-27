import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/HomePage/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import Productos from "./pages/Productos/Productos";
import Carro from "./pages/Carro/Carro";
import Dashboard from "./pages/Dashboard/Dashboard";
import DetailProduct from "./pages/Productos/DetailProduct";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import ScrollToTop from "./helpers/ScrollToTop";
import NotFound from "./pages/404/404";

const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={user ? <Inicio /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos" element={<Productos />} />
        {/* Ruta Detail Product */}
        <Route path="/productos/:id" element={<DetailProduct />} />
        <Route path="/pedidos" element={user ? <Carro /> : <NotFound />} />
        <Route
          path="/dashboard//*"
          element={user ? <Dashboard /> : <NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
