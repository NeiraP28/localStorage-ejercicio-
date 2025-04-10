
//creamos una variable por cada campo, una para el input y otra para el botón
let nombre = document.getElementById("nombre"); //obtenemos elementos por medio de id 
let btnGuardar = document.getElementById("btnGuardar");

//asignamos el evento al botón, indicando que la función que tendra será click
btnGuardar.addEventListener("click", function(event){
    let inputNombre = nombre.value.trim(); // en esta variable se verifica que lo que ingrese el usuario 
    //no tenga espacios con el trim
    event.preventDefault(); 
    //se envian los datos al localStorage, con la clave "nombre" y el valor ingresado en el input
    localStorage.setItem("nombre", inputNombre);

});

