import './css/login.css'
//import './login.js';

export const Contlogin = () => {
  return(
    <>
      <img src="/LOGO INV.PRIV-03.png" alt="" className='cont-logo' /> 
      <select name="" id="" className='barra'>
        <option value="">Seleccione Rol</option>
        <option value="">Rol 1</option>
        <option value="">Rol 2</option>
      </select>
      <div class="Contenedor-txt">
        <span class= "icono-user"><i class="fa-solid fa-user-shield"></i></span>
        <input type="email" name="tctCorreo" id="tctCorreo" className='txt-login' placeholder="ingrese correo"/>
      </div>
      <div className="Contenedor-txt">
        <span className="icono-unlock"><i className="fa-solid fa-unlock"></i></span>
        <span className="inoco-ojo"><i className="far fa-eye-slash"></i></span>
        <input type="password" name="txtPass" id="txtPass" className="txt-login" required placeholder="Ingrese contraseña" />
      </div>
      <label htmlFor="checkRecordar" className='Recordar'>
        <input type="checkbox" name="checkRecordar" id="checkRecordar" className='checkbox'/>
        Recordar contraseña
      </label>
      <a href="" className='recuperar-pass'>Recuperar contraseña</a>
      <input type="submit" value="INICIAR SESION" className='btn-login'/>
    </>
  )
}

