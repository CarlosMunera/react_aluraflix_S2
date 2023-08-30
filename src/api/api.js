import axios from "axios";

const baseURL = 'https://64e57fa509e64530d17e9db2.mockapi.io';

const api = axios.create({
  baseURL: baseURL,
});

export const obtenerDatos = async (url, setData) => {
    const respuesta = await api.get(`${baseURL}${url}`)
    setData(respuesta.data)
}

export const enviarDatos = async (url, datos) => {
    try {
        const respuesta =   await axios.post(`${baseURL}${url}`,datos)
        alert('Datos actualizados correctamente', respuesta.data)
    } catch (error) {
        alert('Error al actualizar los datos: ', error)
    }
}

export const eliminarDatos = async (id) => {
    try {
        const respuesta = await axios.delete(`${baseURL}${id}`)
        console.log(`${baseURL}${id}`)
        alert('Los datos se han eliminado!',respuesta,`${baseURL}${id}`)
    } catch (error) {
        alert('Error al eliminar los datos')
    }
}