import Componente1 from "../../components/Componente1";
import { Link } from "react-router-dom";

function Rota1() {
  return (
    <div> 
      <Link to="/">Voltar</Link>
      <h1>Componente direto</h1>
      <Componente1 />
    </div>
  );
}

export default Rota1;
