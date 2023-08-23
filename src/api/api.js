import axios from "axios";

export const api = axios.create({
    baseURL: "https://64e57fa509e64530d17e9db2.mockapi.io"
})

export const obtenerDatos = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}