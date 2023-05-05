import { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./screens/Main";
import Rota1 from "./screens/Rota1";
import Rota2 from "./screens/Rota2";
import Rota3 from "./screens/Rota3";

/*
  O componente da rota será carregado somente quando 
  o usuário acessar a rota específica. 
*/
const DynamicRota = lazy(() => import("./screens/RotaDinamica"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rota1" element={<Rota1 />} />
        <Route path="/rota2" element={<Rota2 />} />
        <Route path="/rota3" element={<Rota3 />} />
        <Route path="/dynamic">
          <Suspense fallback={<div>Carregando rota dinâmica...</div>}>
            <DynamicRota />
          </Suspense>
        </Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
