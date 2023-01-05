import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    
    <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y 
    admninistra tus <span className="text-slate-700">proyectos </span>
    </h1>

    <form className="my-10 bg-white shadow rounded-lg px-10 py-10">
        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"> Email</label>
            <input id="email" type="email" placeholder="Email de registro" className="w-full mt-3 p-3 border rounded-xl bg-gray-50">
            
            </input>
        </div>

        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"> Password</label>
            <input id="password" type="password" placeholder="Ingresa tu password" className="w-full mt-3 p-3 border rounded-xl bg-gray-50">
            
            </input>
        </div>

        <input type="submit" value="Iniciar Sesion" className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer">

            
        </input>
    </form>

    <nav className="lg:flex lg:justify-between">
        <Link to="registrar" className="block text-center my-5 text-slate-500 uppercase">
        ¿No tienes cuenta? Registrate
        </Link>

        <Link to="olvide-password" className="block text-center my-5 text-slate-500 uppercase">
        Olvide mi password
        </Link>
    </nav>
    </>
  )
}

export default Login