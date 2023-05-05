import { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./screens/Main";
import Rota1 from "./screens/Rota1";
import Rota2 from "./screens/Rota2";
import Rota3 from "./screens/Rota3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rota1" element={<Rota1 />} />
        <Route path="/rota2" element={<Rota2 />} />
        <Route path="/rota3" element={<Rota3 />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
