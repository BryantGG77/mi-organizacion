
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from './components/MyOrg';
import Equipo from './components/Equipo';
import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Lista de equipos
  const equipos = [
    { titulo: 'Programación', colorPrimario: '#57C278', colorSecundario: '#D9F7E9' },
    { titulo: 'Front End', colorPrimario: '#82CFFA', colorSecundario: '#E8F8FF' },
    { titulo: 'Data Science', colorPrimario: '#A6D157', colorSecundario: '#F0F8E2' },
    { titulo: 'Devops', colorPrimario: '#E06B69', colorSecundario: '#FDE7E8' },
    { titulo: 'UX y Diseño', colorPrimario: '#DB6EBF', colorSecundario: '#FAE9F5' },
    { titulo: 'Móvil', colorPrimario: '#FFBA05', colorSecundario: '#FFF5D9' },
    { titulo: 'Innovación y  Gestión', colorPrimario: '#FF8A29', colorSecundario: '#FFEEDF' }
  ]
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : null} */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} />}
      <MyOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
    </div>
  );
}

export default App;
