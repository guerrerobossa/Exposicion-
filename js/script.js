/* ===========================================================
   [Exposicion]
   Aprendiz: [Aris Guerrero] — Ficha 3230489
   =========================================================== */

/* ---------- Elementos de la página ---------- */
const btnSaludo = document.getElementById("btnSaludo");
const salidaSaludo = document.getElementById("salidaSaludo");
const anio = document.getElementById("anio");

/* ---------- TEMA 1: qué es JavaScript ---------- */
// Muestra la fecha y la hora del momento en que se presiona.
// Es algo que el HTML por sí solo no puede hacer.

if (btnSaludo) {

  btnSaludo.addEventListener("click", function () {
    const ahora = new Date();
    const momento = ahora.toLocaleString("es-CO");

    salidaSaludo.textContent =
      "Hola. Esta línea la escribió JavaScript el " + momento + ".";
  });

}

/* ---------- El año del pie de página ---------- */
if (anio) {
  anio.textContent = new Date().getFullYear();
}

/* ===========================================================
   TEMA 2: variables          → le toca a usted
   TEMA 3: tipos de datos     → le toca a usted
   TEMA 4: asignación         → le toca a usted
   TEMA 5: condicionales      → le toca a usted
   TEMA 6: ciclos             → le toca a usted
   =========================================================== */

const boton = document.getElementById('btnEjemploQueEs');
const pagina = document.getElementById('Ejemplos');

boton.addEventListener('click', function () {
  pagina.classList.toggle('oculto');
});
/*VARIABLES ============================================*/

/*const btnProbar = document.getElementById("btnProbar");
const salidaPrueba = document.getElementById("salidaPrueba")

if (btnSaludo) {
 
  btnSaludo.addEventListener("click", function () {
    const ahora = new Date();
    const momento = ahora.toLocaleString("es-CO");
 
    salidaSaludo.textContent =
      "Hola. Esta línea la escribió JavaScript el " + momento + ".";
  }); 
 
} */
const botonEjemplo = document.getElementById("btnEjemploVariables");
const practicas = document.getElementById('ejemplosVariables');


botonEjemplo.addEventListener('click', function () {
  practicas.classList.toggle('oculto');
});



let btnEjemploVariables = document.getElementById("btnEjemploVariables");
let ejemplosVariables = document.getElementById("ejemplosVariables");

let btnEjemploDatos = document.getElementById("btnEjemploDatos");
let ejemplosDatos = document.getElementById("ejemplosDatos");

let btnEjemploTipos = document.getElementById("btnEjemploTipos");
let ejemplosTipos = document.getElementById("ejemplosTipos");

let btnEjemploAsignacion = document.getElementById("btnEjemploAsignacion");
let ejemplosAsignacion = document.getElementById("ejemplosAsignacion");

