import './Equipo.css';
import Colaborador from '../Colaborador';
const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores, eliminarColaborador } = props;

    const fondo = { backgroundColor: colorSecundario };
    const borde = { borderColor: colorPrimario };



    return <>{
        colaboradores.length > 0 && <section className='equipo' style={fondo}>

            <input type='color' className='input-color' value={colorSecundario} onChange={(e) => console.log(e.target.value)} />
            <h3 style={borde}>{titulo}</h3>
            <div className='colaboradores'>

                {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} />)}

            </div>
        </section >
    }
    </>
}

export default Equipo;