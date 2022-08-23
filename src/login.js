const iconOjo = document.querySelector(".inoco-ojo");
iconOjo.addEventListener("click",function(){
  /*================DOCUMENTACION=======================
    se crea un evento en el cual al darle al icono del ojo bloqueado en la interfaz de inicio de sesion cambiara 
    el icono de ojobloqueado por un ojo abierto y adicional cambiara el input de ser tipo password a tipo texto 
    para permitir la visualizacion del contenido esto mismo se ejecuta de invera
  =====================================================*/ 
  const icon = this.querySelector("i");

    if(this.nextElementSibling.type === "password"){
      this.nextElementSibling.type = "text"; //campo de texto 
      icon.classList.remove("fa-eye-slash"); //ojo bloqueado
      icon.classList.add("fa-eye");          //ojo abierto
    }
    else if(this.nextElementSibling.type === "text"){
      this.nextElementSibling.type = "password"; //campo de password
      icon.classList.remove("fa-eye");       //ojo abierto
      icon.classList.add("fa-eye-slash");    //ojo bloqueado
    }
})