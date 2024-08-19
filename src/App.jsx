import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavbar from "./Componets/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./Componets/MyFooter";
import Servizi from "./Componets/Servizi";
import Home from "./Componets/Home";
import Contatti from "./Componets/Contatti";
import Chiasiamo from "./Componets/Chisiamo";

function App() {
  return (
    <div className="estenzione">
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/chisiamo" element={<Chiasiamo />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
