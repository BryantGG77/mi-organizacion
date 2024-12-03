import './Equipo.css';
import Colaborador from '../Colaborador';
const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores } = props;

    const fondo = { backgroundColor: colorSecundario };
    const borde = { borderColor: colorPrimario };

    console.log(colaboradores.length);


    return <>{
        colaboradores.length > 0 && <section className='equipo' style={fondo}>
            <h3 style={borde}>{titulo}</h3>
            <div className='colaboradores'>

                {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} />)}

            </div>
        </section >
    }
    </>
}

export default Equipo;