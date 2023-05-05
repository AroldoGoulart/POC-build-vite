import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
const Componente2 = lazy(() => import('../../components/Componente2'));
const Componente3 = lazy(() => import('../../components/Componente3'));

function Rota2() {
  return (
    <>
      <Link to="/">Voltar</Link>
      <h1>
        Componente lazy
      </h1>
      <Suspense fallback={<div>Carregando componente 2...</div>}>
        <Componente2 />
      </Suspense>
      <Suspense fallback={<div>Carregando componente 3...</div>}>
        <Componente3 />
      </Suspense>
    </>
  );
}

export default Rota2;
