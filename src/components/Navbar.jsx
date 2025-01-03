import './Navbar.css';

function Navbar({ setVista }) {
  return (
    <div className='navbar'>
      <a href="#" onClick={() => setVista("Home")}>Home</a>
      <a href="#" onClick={() => setVista("Stacks")}>Mis Stacks</a>
      <a href="#" onClick={() => setVista("Proyectos")}>Mis Proyectos</a>
      <a href="#" onClick={() => setVista("Contactos")}>Contáctame</a>
    </div>
  );
}

export default Navbar;
