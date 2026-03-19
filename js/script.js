/*Se debe de encargar de cambiar el tema a el titulo*/
const elTitulo =document.getElementById("elTitulo");
const elBoton = document.getElementById("elBoton");
const elBoton1 = document.getElementById("elBoton1");

elBoton.addEventListener ("click", () => {
    elTitulo.style.color = "red";
});
elBoton1.addEventListener ("click", () => {
    elTitulo.style.color = "white";
});
