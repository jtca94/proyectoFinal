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
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

// usear pagina 404 cuando se intente acceder a una ruta restringida
const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={user ? <Inicio/> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/pedidos" element={user ? <Carro /> : <Login/>} />
        <Route
          path="/dashboard//*"
          element={user ? <Dashboard /> : <Login />}
        />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
