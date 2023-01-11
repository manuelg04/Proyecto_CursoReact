import React from 'react'

const NuevoPassword = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Reestablece tu pasword y no pierdas acceso a tus
      <span className="text-slate-700"> proyectos </span>
    </h1>
    <form className="my-10 bg-white shadow rounded-lg px-10 py-10">
        <div className="my-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            {" "}
            Nuevo Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu nuevo password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          ></input>
        </div>
        <input
          type="submit"
          value="Guardar nuevo password"
          className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer"
        ></input>
      </form>
      </>

 
  )
}

export default NuevoPassword