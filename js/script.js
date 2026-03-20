/*Se debe de encargar de cambiar el tema a el titulo*/
/*const elTitulo = document.getElementById("elTitulo");
const elBoton = document.getElementById("elBoton");
const elBoton1 = document.getElementById("elBoton1");

elBoton.addEventListener("click", () => {
    elTitulo.style.color = "red";
});
elBoton1.addEventListener("click", () => {
    elTitulo.style.color = "white";
});*/

// 1. Referencia al botón
const btnMorado = document.getElementById("btnMorado");

// 2. Evento de clic
btnMorado.addEventListener("click", () => {
    // 'toggle' pone la clase si no está, y la quita si ya está
    document.body.classList.toggle("tema-morado");

    // 3. Opcional: Cambiar el texto del botón al hacer clic
    if (document.body.classList.contains("tema-morado")) {
        btnMorado.innerText = "MODO OSCURO";
    } else {
        btnMorado.innerText = "TEMA MORADO";
    }
});