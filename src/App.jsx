import './css/login.css'

export const Conlogin = () => {
  return(
    <>
      <img src="/LOGO INV.PRIV-03.png" alt="" className='cont-logo' /> 
      <select name="" id="" className='barra'>
        <option value="">Seleccione Rol</option>
        <option value="">Rol 1</option>
        <option value="">Rol 2</option>
      </select>
      <input type="email" name="tctCorreo" id="tctCorreo" className='txt-login' placeholder="ingrese correo"/>
      <input type="password" name="txtPass" id="txtPass" className='txt-login' placeholder="ingrese contraseña"/>
      <label htmlFor="checkRecordar" className='Recordar'>
        <input type="checkbox" name="checkRecordar" id="checkRecordar" className='checkbox'/>
        Recordar contraseña
      </label>
      <a href="" className='recuperar-pass'>Recuperar contraseña</a>
      <input type="submit" value="INICIAR SESION" className='btn-login'/>
    </>
  )
}