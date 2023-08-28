import React from 'react'

export const Usuario = () => {
  return (
    <>
    <h1>Usuario</h1>
    <form>
        <label>Nombre</label>
        <br />
        <input type='name'/>
        <br />
        <label>Apellido</label>
        <br />
        <input type='name'/>
        <br />
        <label>Correo</label>
        <br />
        <input type='mail'/>
        <br />
        <label>Contraseña</label>
        <br />
        <input type='password'/>
        <br />
    </form>
    <button>Enviar</button>


   </>
  )
}
