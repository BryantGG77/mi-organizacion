
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from './components/MyOrg';
import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : null} */}
      {mostrarFormulario && <Formulario />}
      <MyOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
