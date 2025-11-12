import Stacks from './components/Stacks';
import './App.css';
import My from './components/My';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Contacto from './components/Contacto1';
import Projects from './components/Projects';

function App() {
  const [vista, setVista] = useState("Home");

  return (
    <>
      <Navbar setVista={setVista} />
      {vista === "Home" ? <My /> :
      vista === "Stacks" ? <Stacks /> :
      vista == "Contacto" ? <Contacto />:
      vista === "Proyectos" ? <Projects /> : null}
    </>
  );
}

export default App;
