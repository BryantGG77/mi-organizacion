
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from './components/MyOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    { nombre: 'Brayan Velasquez', puesto: 'Desarrolladora de software', foto: 'https://github.com/BryantGG77.png', equipo: 'Programación' },
    { nombre: 'Harland Lohora', puesto: 'Desarrolladora de software', foto: 'https://github.com/harlandlohora.png', equipo: 'Front End' },
    { nombre: 'Jose Gonzalez', puesto: 'Dev. FullStack', foto: 'https://github.com/JoseDarioGonzalezCha.png', equipo: 'Programación' },
    { nombre: 'Jeanmarie Quijada', puesto: 'Instructora en Alura Latam', foto: 'https://github.com/JeanmarieAluraLatam.png', equipo: 'Devops' },
    {
      nombre: 'Christian Velasco', puesto: 'Head de Alura e instructor', foto: 'https://github.com/christianpva.png', equipo: 'Front End'
    },
  ]);

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
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} />)
      }

      <Footer />
    </div>
  );
}

export default App;

