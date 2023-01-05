import { Link } from "react-router-dom"

const Registrar = () => {
  return (
    <>
    
    <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu cuenta y administra tus
     <span className="text-slate-700"> proyectos </span>
    </h1>

    <form className="my-10 bg-white shadow rounded-lg px-10 py-10">

    <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"> Nombre </label>
            <input type="text" placeholder="Tu nombre" className="w-full mt-3 p-3 border rounded-xl bg-gray-50">
            
            </input>
        </div>

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

        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"> Repite Tu Password</label>
            <input id="password2" type="password" placeholder="Repite tu password" className="w-full mt-3 p-3 border rounded-xl bg-gray-50">
            
            </input>
        </div>

        <input type="submit" value="Crear cuenta" className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer">

            
        </input>
    </form>

    <nav className="lg:flex lg:justify-between">
        <Link to="/" className="block text-center my-5 text-slate-500 uppercase">
        Si ya tienes cuenta puedes iniciar sesion
        </Link>

        <Link to="olvide-password" className="block text-center my-5 text-slate-500 uppercase">
        Olvide mi password
        </Link>
    </nav>
    </>
  )
}

export default Registrar