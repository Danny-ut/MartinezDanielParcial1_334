// Botón "volver arriba": aparece cuando el usuario baja más de 400px
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("back-to-top--visible");
    } else {
        backToTop.classList.remove("back-to-top--visible");
    }
});

// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();
