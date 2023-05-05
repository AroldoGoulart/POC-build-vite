import "../../App.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg"
import {  Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <h1>Aplicativo Vite com Code Splitting</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Link to="/rota1">Rota 1</Link> | <Link to="/rota2">Rota 2</Link> | <Link to="/rota3">Rota 3</Link>
    </>
  );
}
export default Main;
