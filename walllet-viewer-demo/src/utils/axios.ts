import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APIMANAGER_URL}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    apikey: import.meta.env.VITE_API_KEY,
  },
});

// Interceptor para manejar errores de respuesta
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Puedes manejar los errores aquí, como redirigir si hay un 401 o mostrar un mensaje
    console.error("Error en la respuesta de la solicitud:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
