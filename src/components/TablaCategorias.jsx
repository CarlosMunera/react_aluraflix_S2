import '../css/estilos.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { obtenerDatos, eliminarDatos} from '../api/api';



const TablaCategorias = (datosEnviados) => {

    const [solicitarDatos,setSolicitarDatos] = useState(false)
    const [videos,setVideos] = useState([])
    const [categorias,setCategorias] = useState([])
   
    useEffect(() => {
        obtenerDatos('/videos',setVideos)
        obtenerDatos('/categorias',setCategorias)
        setSolicitarDatos(false)
    },[solicitarDatos])

    
    const manejarRemover = (url,nombreCategoria) => {
        if(videos.some( video => video.categoria === nombreCategoria)){
            alert(`¡NO SE PUEDE REMOVER LA CATEGORIA!\n *Existen videos asociados a la categoria "${nombreCategoria.toUpperCase()}".\n *Para remover la categoria primero elimine todos los videos relacionados.`)
        }else {
            eliminarDatos(url)
            alert('¡Categoria Eliminada!...')
            setSolicitarDatos(true)
        }
        
        
        // if (VideoEnCategoria){
        //     
        // }else {
        //     eliminarDatos(id)
        //     setActualizarDatos(true)
        // }

        
    }

    return (
        <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Descripción</td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map((categoria, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.descripcion}</td>
                                            <td className="table__editar" ><button type='reset' className='table_btn' >Editar</button></td>
                                            <td className="table__remover"><button type='reset' className='table_btn' onClick={()=>manejarRemover(`/categorias/${categoria.id}`,categoria.nombre)}>Remover</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
    );
}

export default TablaCategorias