import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Componente4 from '../../components/Componente4';
const Componente3 = lazy(() => import('../../components/Componente3'));

function Rota3() {
  return (
    <>
      <Link to="/">Voltar</Link>

      <h1>
        Componente (hibrido)
      </h1>
      <Componente4 />
      <Suspense fallback={<div>Carregando componente 3...</div>}>
        <Componente3 />
      </Suspense>
    </>
  );
}

export default Rota3;
