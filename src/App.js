import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Formulario from "./Componentes/Formulario/Formulario";
import MiOrg from "./Componentes/MiOrg/MiOrg";
import Equipo from "./Componentes/Equipo/Equipo";
import Footer from "./Componentes/Footer/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [Colaboradores, actualizarColaborador] = useState([
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/carlosavalenzuelag1/ImgColaboradoresOg/blob/main/image4.png?raw=true",
      nombre: "Carlos Valenzuela",
      puesto: "Ingeniero",
      fav: true
    },

    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/carlosavalenzuelag1/ImgColaboradoresOg/blob/main/image4.png?raw=true",
      nombre: "Carlos Valenzuela",
      puesto: "Ingeniero",
      fav: true
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorDestaque: "#57C278 ",
      colorFondo: "#D9F7E9",
    },

    {
      id: uuidv4(),
      titulo: "Front End",
      colorDestaque: "#82CFFA",
      colorFondo: "#E8F8FF",
    },

    {
      id: uuidv4(),
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      colorFondo: "#F0F8E2",
    },

    {
      id: uuidv4(),
      titulo: "Devops",
      colorDestaque: "#E06B69",
      colorFondo: "#FDE7E8",
    },

    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorDestaque: "#DB6EBF",
      colorFondo: "#FAE9F5",
    },

    {
      id: uuidv4(),
      titulo: "Móvil",
      colorDestaque: "#FFBA05",
      colorFondo: "#FFF5D9",
    },

    {
      id: uuidv4(),
      titulo: "Innovación y  Gestión",
      colorDestaque: "#FF8A29",
      colorFondo: "#FFEEDF",
    },
  ]);

  //ternario --> condicion ? se muestra : no se muestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador:", colaborador);
    actualizarColaborador([...Colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = Colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaborador(nuevosColaboradores)
  };

  //Actualizar color equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorDestaque = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };


  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])

  }

  const like = (id) => {
    console.log("like", id )
    const colaboradoresActualizados = Colaboradores.map((colaborador) => {
      if (colaborador.id ===id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>}*/}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          Colaboradores={Colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );

  //Footer
}
export default App;
