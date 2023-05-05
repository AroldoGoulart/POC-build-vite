import { Suspense, lazy } from 'react';

const Componente3 = lazy(() => import('../../components/Componente3'));

function RotaDinamica() {
  return (
  <>
   <h2>Rota dinâmica carregada com React.lazy</h2>
   <Suspense fallback={<div>Carregando componente 3...</div>}>
      <Componente3 />
    </Suspense>
  </>
 )
}

export default RotaDinamica;
