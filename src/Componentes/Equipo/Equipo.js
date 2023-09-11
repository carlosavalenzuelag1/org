import "./Equipo.css";

import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaboradores/Colaborador";
const Equipo = (props) => {
  //Destructuración
  const { colorDestaque, colorFondo, titulo, id } = props.datos;
  const { Colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const obj = {
    backgroundColor: hexToRgba(colorDestaque, 0.6),
  };

  const estiloTitulo = { borderColor: colorDestaque };

  return (
    <>
      {
        Colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={ hexToRgba(colorDestaque, 0.6)}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />

          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {
              Colaboradores.map((colaborador, index) => (
                <Colaborador
                  datos={colaborador}
                  key={index}
                  colorDestaque={colorDestaque}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                />
              ))}
          </div>
        </section>
      }
    </>
  );
};

export default Equipo;
