
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from "react"
import "./Formulario.css"

const Formulario = (props) => {


    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo } = props



    const manejarEnvio = (e) => {

        e.preventDefault()
        console.log("Manejar el envío")

        let datosA_enviar = {

            nombre: nombre, puesto: puesto, foto: foto, equipo: equipo
        }

        registrarColaborador(datosA_enviar)
    }

    const manejarNuevoEquipo = (e) => {

        e.preventDefault()
        crearEquipo({titulo, colorDestaque: color})
    }

    return <section className="formulario">
        
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton texto="Crear" />

        </form>

        <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo="Color" placeholder="Ingresar color" required valor={color} actualizarValor={actualizarColor} />
            <Boton texto="Crear equipo" />

        </form>

    </section>

}

export default Formulario;