import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1 className="bg">Home</h1>} />
      </Routes>
    </>
  );
};
export default App;
