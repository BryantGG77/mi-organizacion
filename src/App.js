
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from './components/MyOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    { id: uuid(), titulo: 'Programación', colorPrimario: '#57C278', colorSecundario: '#D9F7E9' },
    { id: uuid(), titulo: 'Front End', colorPrimario: '#82CFFA', colorSecundario: '#E8F8FF' },
    { id: uuid(), titulo: 'Data Science', colorPrimario: '#A6D157', colorSecundario: '#F0F8E2' },
    { id: uuid(), titulo: 'Devops', colorPrimario: '#E06B69', colorSecundario: '#FDE7E8' },
    { id: uuid(), titulo: 'UX y Diseño', colorPrimario: '#DB6EBF', colorSecundario: '#FAE9F5' },
    { id: uuid(), titulo: 'Móvil', colorPrimario: '#FFBA05', colorSecundario: '#FFF5D9' },
    { id: uuid(), titulo: 'Innovación y Gestión', colorPrimario: '#FF8A29', colorSecundario: '#FFEEDF' }
  ]);

  console.log(uuid());


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log('eliminar colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);

  }

  const actualizarColor = (color, id) => {
    console.log('actualizar: ', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }


  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }


  const like = (id) => {
    console.log('like', id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  }
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : null} */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} />}
      <MyOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} />)
      }

      <Footer />
    </div>
  );
}

export default App;

