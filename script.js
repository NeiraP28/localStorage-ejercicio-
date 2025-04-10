
let btnEliminar = document.getElementById("btnEliminar");

//obtiene info de la etiqueta h1 sin mensaje 
let encabezado = document.getElementById("encabezado");
//let msjIndex = document.getElementById("msjIndex");

//evalua la info del localStorage y muestra msj
if(localStorage.getItem("nombre") != null){
//a esta variable se le asigna lo que se obtenga del localStorage en nombre 
 let nombre = localStorage.getItem("nombre");
 //después de ver que no sea null asigna al encabezado vacio el siguiente msj
 encabezado.innerText = `Bienvenid@ de nuevo ${nombre}`;
 console.log(encabezado);
 
} else {
     encabezado.innerText = `Regresa al index a ingresar tu nombre`;
     console.log(encabezado);
    }
 //se crea el evento y se asigna al botón eliminar 
btnEliminar.addEventListener("click", function(event){
    localStorage.removeItem("nombre"); //elimina del localStorage. Ahoa sera null y 
//tendra que volver a ingresar el nombre en el index
    //**pendiente: hacer que salga el msj de regresar al index sin tener que refrescar la página
    
});
