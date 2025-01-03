import Stacks from './components/Stacks';
import './App.css';
import My from './components/My';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [vista, setVista] = useState("Home");

  return (
    <>
      <Navbar setVista={setVista} />
      {vista === "Home" ? <My /> : <Stacks />}
    </>
  );
}

export default App;
