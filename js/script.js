const carrusel = document.querySelector('.relative');
const img = carrusel.querySelectorAll('img');
let indiceActual = 0;

setInterval(() => {
    imagenes[indiceActual].classList.remove('block');
    imagenes[indiceActual].classList.add('hidden');
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenes[indiceActual].classList.remove('hidden');
    imagenes[indiceActual].classList.add('block');
  }, 1000); // tiempo de transición entre imágenes