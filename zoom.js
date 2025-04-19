window.addEventListener("DOMContentLoaded", function () {
  const zoomImg = document.getElementById("zoomImg");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const zoomFactor = 1 + scrollTop / 1500;
    zoomImg.style.transform = `scale(${zoomFactor})`;
  });
});




// fotos

const galeria = document.getElementById("contenedor-galeria");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

const grupo1 = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
  "img/foto7.jpg",
  "img/foto8.jpg"
];

const grupo2 = [
  "img/foto9.jpg",
  "img/foto10.jpg",
  "img/foto11.jpg",
  "img/foto12.jpg",
  "img/foto13.jpg",
  "img/foto14.jpg",
  "img/foto15.jpg",
  "img/foto16.jpg"
];

let grupoActual = 1;

function cargarGaleria(fotos) {
  galeria.innerHTML = "";
  fotos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto de galería";
    galeria.appendChild(img);
  });
}

flechaIzquierda.addEventListener("click", () => {
  if (grupoActual === 2) {
    cargarGaleria(grupo1);
    grupoActual = 1;
  }
});

flechaDerecha.addEventListener("click", () => {
  if (grupoActual === 1) {
    cargarGaleria(grupo2);
    grupoActual = 2;
  }
});
function mostrarGaleria() {
  
  document.querySelector('header').style.display = 'none';
  document.querySelector('.zoom-scroll').style.display = 'none';
  document.getElementById('quienessomos').style.display = 'none';
  document.getElementById('servicios').style.display = 'none';
  document.getElementById('servicios1').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('galeria').style.display = 'block';


  cargarGaleria(grupo1);
  grupoActual = 1;

 
  window.scrollTo(0, 0);
}

function volverInicio() {
 
  document.querySelector('header').style.display = 'flex';
  document.querySelector('.zoom-scroll').style.display = 'block';
  document.getElementById('quienessomos').style.display = 'block';
  document.getElementById('servicios').style.display = 'block';
  document.getElementById('servicios1').style.display = 'block';
  document.getElementById('contacto').style.display = 'flex';
  document.getElementById('footer').style.display = 'flex';
  document.getElementById('galeria').style.display = 'none';

  window.scrollTo(0, 0);
}


document.getElementById('galeria').style.display = 'none';



 window.onscroll = function() {
  const boton = document.getElementById("boton-arriba");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
};


function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  