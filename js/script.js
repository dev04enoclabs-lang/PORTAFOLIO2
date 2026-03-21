/*Se debe de encargar de cambiar el tema a el titulo*/
/*const elTitulo = document.getElementById("elTitulo");
const elBoton = document.getElementById("elBoton");
const elBoton1 = document.getElementById("elBoton1");

elBoton.addEventListener("click", () => {
    elTitulo.style.color = "red";
});
elBoton1.addEventListenerF("click", () => {
    elTitulo.style.color = "white";
});*/

// 1. Referencia al botón
const btnMorado = document.getElementById("btnMorado");

btnMorado.addEventListener("click", () => {
    document.body.classList.toggle("tema-morado");

    if (document.body.classList.contains("tema-morado")) {
        btnMorado.innerText = "MODO OSCURO";
    } else {
        btnMorado.innerText = "TEMA MORADO";
    }
});