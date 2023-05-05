/* eslint-disable react-refresh/only-export-components */
import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Main from "./screens/Main";
import Rota1 from "./screens/Rota1";
import Rota2 from "./screens/Rota2";
import Rota3 from "./screens/Rota3";
import { Suspense, lazy } from "react";

const Dynamica = lazy(() => import("./screens/RotaDinamica"));

const routeElements = [
  <Route path="/" element={<Main />} />,
  <Route path="/rota1" element={<Rota1 />} />,
  <Route path="/rota2" element={<Rota2 />} />,
  <Route path="/rota3" element={<Rota3 />} />,
  <Route path="/rota4" 
    element={
      <Suspense fallback={<div>Carregando...</div>}>
          <Dynamica/>
      </Suspense>
    }
  />,
];

const routes = createRoutesFromElements(routeElements);
const router = createBrowserRouter(routes);

export  {router};
