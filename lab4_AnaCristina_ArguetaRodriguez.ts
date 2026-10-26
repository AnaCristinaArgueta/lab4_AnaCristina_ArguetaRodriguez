//Ana Cristina Argueta Rodriguez 

//interfaz 

interface Reservacion {
  id: number;
  cliente: string;
  personas: number;
  zona: string;
}

//reservaciones 

const reservaciones: Reservacion[] = [
  { id: 1, cliente: "Carlos", personas: 4, zona: "Interior" },
  { id: 2, cliente: "Maria", personas: 6, zona: "Terraza" },
  { id: 3, cliente: "Jose", personas: 5, zona: "Interior" },
  { id: 4, cliente: "Ana", personas: 8, zona: "Terraza" }
];

console.log("=== RESERVACIONES INICIALES ===");
console.log(reservaciones);

//

function registrarReservacion(
  lista: Reservacion[],
  nueva: Reservacion,
  prioritaria: boolean
): void {
  if (prioritaria) {
    lista.unshift(nueva);
  } else {
    lista.push(nueva);
  }

  console.log("Reservacion registrada:");
  console.log(nueva);
}

// Registrar una reservacion normal al final
registrarReservacion(
  reservaciones,
  { id: 5, cliente: "Pedro", personas: 3, zona: "Interior" },
  false
);

// Registrar una reservacion prioritaria al inicio
registrarReservacion(
  reservaciones,
  { id: 6, cliente: "Lucia", personas: 7, zona: "Terraza" },
  true
);

console.log("=== LISTA ANTES DE ATENDER ===");
console.log(reservaciones);

//atender reservacion 
function atenderReservacion(lista: Reservacion[]): void {
  const atendida = lista.shift();

  if (atendida !== undefined) {
    console.log("Reservacion atendida:");
    console.log("Cliente:", atendida.cliente);
    console.log("Personas:", atendida.personas);
  } else {
    console.log("No hay reservaciones pendientes.");
  }
}

// Primera prueba: atender una reservacion
atenderReservacion(reservaciones);

// Segunda prueba: comprobar una lista vacia
const listaVacia: Reservacion[] = [];
atenderReservacion(listaVacia);

// buscar indentificador 
const reservacionEncontrada = reservaciones.find(
  (reservacion: Reservacion): boolean => reservacion.id === 2
);

if (reservacionEncontrada !== undefined) {
  console.log("=== RESERVACION ENCONTRADA ===");
  console.log(reservacionEncontrada);
} else {
  console.log("No se encontro la reservacion con ID 2.");
}

// Demostrar un identificador inexistente
const reservacionInexistente = reservaciones.find(
  (reservacion: Reservacion): boolean => reservacion.id === 99
);

if (reservacionInexistente !== undefined) {
  console.log(reservacionInexistente);
} else {
  console.log("No existe una reservacion con ID 99.");
}

//filtar terraza con 5 o mas personas 

const cantidadAntesDelFiltro = reservaciones.length;

const reservacionesFiltradas: Reservacion[] = reservaciones.filter(
  (reservacion: Reservacion): boolean =>
    reservacion.zona === "Terraza" && reservacion.personas >= 5
);

console.log("=== RESERVACIONES FILTRADAS ===");

if (reservacionesFiltradas.length > 0) {
  console.log(reservacionesFiltradas);
} else {
  console.log("No hay reservaciones que cumplan ambas condiciones.");
}

const cantidadDespuesDelFiltro = reservaciones.length;

console.log("=== ESTADO FINAL ===");
console.log("Reservaciones pendientes:");
console.log(reservaciones);

console.log("Cantidad de reservaciones pendientes:", reservaciones.length);

console.log("Cantidad de coincidencias del filtro:",
  reservacionesFiltradas.length
);

console.log("Cantidad original antes del filtro:", cantidadAntesDelFiltro);
console.log("Cantidad original despues del filtro:", cantidadDespuesDelFiltro);

console.log(
  "El filtro modifico el arreglo original",
  cantidadAntesDelFiltro !== cantidadDespuesDelFiltro
);

