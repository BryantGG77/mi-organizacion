import './Equipo.css';
import Colaborador from '../Colaborador';
const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;

    const fondo = { backgroundColor: colorSecundario }
    const borde = { borderColor: colorPrimario }

    return <section className='equipo' style={fondo}>
        <h3 style={borde}>{titulo}</h3>
        <div className='colaboradores'>
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;