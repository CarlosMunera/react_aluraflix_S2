import { useState } from 'react'
import ButtonForm from '../components/ButtonForm'
import CampoTexto from '../components/CampoTexto'
import '../css/estilos.css'
import TextArea from '../components/TextArea'
import CampoColor from '../components/CampoColor'
import { enviarDatos, actualizarDatos } from '../api/api'
import { v4 as uuidv4 } from 'uuid'
import TablaCategorias from '../components/TablaCategorias'

const NuevaCategoria = () =>{
    
    const [datosEnviados,setDatosEnviados] = useState(false)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [color, setColor] = useState('')
    const [codigo, setCodigo] = useState('')
 
    
    

    const manejarEnvio = (e) => {
        e.preventDefault()
        const id = uuidv4()
        const datosAEnviar = {
            nombre,
            descripcion,
            color,
            id
        }
        console.log(datosAEnviar)
        enviarDatos('/categorias',datosAEnviar)
    }

    const manejarLimpiar = () => {
        setNombre('')
        setDescripcion('')
        setColor('')
        setCodigo('')
    }

    const manejarEditar = (url) => {
        
    }

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="nuevovideo">
                <div className="container">
                    <h2 className="nuevovideo__titulo">Nueva Categoría</h2>
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto 
                            titulo='Nombre' 
                            error='' 
                            required 
                            valor={nombre}
                            actualizarValor={setNombre}    
                        />

                        <TextArea 
                            titulo='Descripción' 
                            error='' 
                            required
                            valor={descripcion}
                            actualizarValor={setDescripcion} 
                        />

                        <CampoColor 
                            titulo='Color' 
                            error='' 
                            required
                            valor={color}
                            actualizarValor={setColor}
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            error='' 
                            required
                            valor={codigo}
                            actualizarValor={setCodigo}
                        />

                        <div className="botones">
                            <ButtonForm tipo='submit' titulo='Guardar' styles={EstilosBtnGuardar}/>
                            <ButtonForm tipo='reset' titulo='Limpiar' styles={EstilosBtnLimpiar} manejarClic={()=>manejarLimpiar()}/>
                        </div>

                    </form>

                    <TablaCategorias 
                        datosEnviados={datosEnviados}
                    />

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaCategoria