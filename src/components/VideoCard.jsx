import '../css/estilos.css'
import { Link } from 'react-router-dom'
import { obtenerDatos } from '../api/api'
import { useEffect, useState } from 'react'

const VideoCards = ({ url, color, nombreCategoria }) => {
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        obtenerDatos('/videos', setVideos)
    },[])


    let colorCard = {
        border: `2px solid ${color}`, 
        backgroundColor: `${color}`
    }
    return (
        <>
            {
                videos.map(video => {
                    const { id, urlVideo, urlImagen, categoria } = video
                    if(categoria === nombreCategoria){
                        return (
                        <Link to={`${urlVideo}`} target="_blank" rel="noopener noreferrer" key={id}>
                            <div className='videocard' style={ colorCard } key={id}>
                                <img src={`${urlImagen}`} alt="Imagen video card" key={id}/>
                            </div>
                        </Link>
                        );
                    }   
                })
            }
        </>
        
    )
}

export default VideoCards