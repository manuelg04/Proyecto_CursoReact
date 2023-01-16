import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
      
        const autenticarUsuario = async () => {
            setCargando(false)
            const token = localStorage.getItem('token')
            if(!token){
                return
            }

            const config = {
                headers: {
                    "Context-Type" : "application/json",
                    Authorization:  `Bearer ${token}`
                }
            }

            try {

                const {data} = await clienteAxios('/usuarios/perfil', config)
                setAuth(data)
                navigate('/proyectos')
                
            } catch (error) {
                setAuth({})

                
            }
            setCargando(false)
        }
        autenticarUsuario()
     
    }, [])
    

    return (
        <AuthContext.Provider
        
        value={{
            auth,
            setAuth,
            cargando,
            setCargando,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider

}

export default AuthContext