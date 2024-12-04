import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    const fondo = { backgroundColor: hexToRgba(colorPrimario, 0.6) };

    const borde = { borderColor: colorPrimario };



    return <>{
        colaboradores.length > 0 && <section className='equipo' style={fondo}>

            <input type='color' className='input-color' value={colorPrimario} onChange={(e) => actualizarColor(e.target.value, id)} />
            <h3 style={borde}>{titulo}</h3>
            <div className='colaboradores'>

                {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} />)}

            </div>
        </section >
    }
    </>
}

export default Equipo;