import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar({ setVista }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef(null); // Referencia para el contenedor del menú

  // Cerrar el menú si se hace clic fuera del mismo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAbierto(false); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
        {/* Ícono del menú sándwich */}
        <div className={`burger ${menuAbierto ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`menu-links ${menuAbierto ? "show" : ""}`}>
        <a href="#" onClick={() => { setVista("Home"); setMenuAbierto(false); }}>Sobre Mí</a>
        <a href="#" onClick={() => { setVista("Stacks"); setMenuAbierto(false); }}>Mis Stacks</a>
        <a href="#" onClick={() => { setVista("Proyectos"); setMenuAbierto(false); }}>Mis Proyectos</a>
        <a href="#" onClick={() => { setVista("Contacto"); setMenuAbierto(false); }}>Contáctame</a>
      </div>
    </nav>
  );
}

export default Navbar;
