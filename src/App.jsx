import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./Componets/MyFooter";
import Home from "./Componets/Home";
import Contatti from "./Componets/Contatti";
import MyNavbar from "./Componets/MyNavbar";
import Collaborazioni from "./Componets/Collaborazioni";

function App() {
  return (
    <div className="estenzione">
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/collaborazioni" element={<Collaborazioni />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
