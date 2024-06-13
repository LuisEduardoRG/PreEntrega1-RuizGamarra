import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";


export const Navbar = () => {
  return (
    <div className="navbarContainer">
      
      <img src="https://res.cloudinary.com/dbmleuqmy/image/upload/v1718301949/logo_iqq1le.png" alt="" />

      <ul>
          <li>
            <button id="todos" class="boton-menu boton-categoria active"><i class=""></i> Todos los productos</button>
          </li>
          <li>
            <button id="hombre" class="boton-menu boton-categoria"><i class=""></i> Hombre</button>
          </li>
          <li>
            <button id="mujer" class="boton-menu boton-categoria"><i class=""></i> Mujer</button>
          </li>
          <li>
            <button id="billeteras" class="boton-menu boton-categoria"><i class=""></i> Billeteras</button>
          </li>
          <li>
            <button id="carteras" class="boton-menu boton-categoria"><i class=""></i> Carteras</button>
          </li>
          <li>
            <button id="morrales" class="boton-menu boton-categoria"><i class=""></i> Morrales</button>
          </li>
      </ul>

      <div>
          <CartWidget />
      </div>
      


    </div>
  );
};