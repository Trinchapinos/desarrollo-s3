const duraciones = [95, 120, 45, 180, 62, 150, 88, 210, 73, 140];
// console.log("Duraciones de las películas en minutos:", duraciones);
// console.log("Elementos totales en el array duraciones:", duraciones.length);
// console.log("Primer elemento:", duraciones[0]);


// for (let i = 0; i < duraciones.length; i++) {
//   console.log(`Duración de la película ${i + 1}: ${duraciones[i]} minutos`);
// }

// const duracionPelicula = 135 //minutos

// if (duracionPelicula < 90) {
//   console.log("La película es corta");
// } else if (duracionPelicula <= 120) {
//   console.log("La película es estándar");
// } else {
//   console.log("La película es larga");
// }

// let cortas = 0;
// let normales = 0;
// let largas = 0;

// for (let i = 0; i < duraciones.length; i++) {
//   if (duraciones[i] < 90) {
//     cortas++;
//     console.log(`${duraciones[i]} es una película corta`);
//   } else if (duraciones[i] <= 120) {
//     normales++;
//     console.log(`${duraciones[i]} es una película estándar`);
//   } else {
//     largas++;
//     console.log(`${duraciones[i]} es una película larga`);
//   }
// }

// console.log(`Cortas: ${cortas} - Normales: ${normales} - Largas: ${largas}`);


// const pelicula = {
//   titulo: "Origen",
//   fecha: 2010,
//   rating: 8.8,
//   disponible: true,
// }

// console.log(pelicula)
// console.log(pelicula.titulo)
// console.log(pelicula["fecha"]) //Esto se utiliza unicamente cuando el nombre tiene espacios o caracteres especiales, de lo contrario se utiliza la notación de punto. 

// pelicula.rating = 9.0
// pelicula.director = "Christopher Nolan"

// console.log(pelicula)

//array de peliculas
const peliculas = [
  {
    titulo: "Origen",
    fecha: 2010,
    genero: "Ciencia ficción",
    rating: 8.8,
    disponible: true,
  },
  {
    titulo: "Parásitos",
    fecha: 2019,
    genero: "Drama",
    rating: 8.6,
    disponible: true,
  },
  {
    titulo: "El Faro",
    fecha: 2019,
    genero: "Terror",
    rating: 7.5,
    disponible: false,
  },
  {
    titulo: "Dune",
    fecha: 2021,
    genero: "Ciencia ficción",
    rating: 8.0,
    disponible: true,
  },
  {
    titulo: "La Pianista",
    fecha: 2001,
    genero: "Drama",
    rating: 7.2,
    disponible: false,
  },
  {
    titulo: "Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
  }
];

for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];
  if (pelicula.disponible) {
    console.log(
      `[${pelicula.fecha}] ${pelicula.titulo} - Género: ${pelicula.genero} - Rating: ${pelicula.rating}`);
  } else {
    console.log(
      `[${pelicula.fecha}] ${pelicula.titulo} - NO DISPONIBLE`);
  }
}

for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];

  if (pelicula.disponible && pelicula.rating >= 8) {
    console.log(
      `Recomendada: ${pelicula.titulo} (${pelicula.rating})`
    )
  }

  if (pelicula.genero === "Terror" || pelicula.genero === "Ciencia ficción") {
console.log(
  `Género TOP: ${pelicula.titulo} - (${pelicula.genero})`)
}
//funciona igual que pelicula.disponible === false
if (!pelicula.disponible) {
  console.log(
    `Próximamente: ${pelicula.titulo}`)
}
}

//Funciones: Reciben datos de entrada, procesan esos datos y devuelven un resultado.

function sumarPrecios(precio1, precio2) {
  const resultado = precio1 + precio2;
  return resultado;
}

console.log(sumarPrecios(12, 24));

function restarPrecios(precio1, precio2) {
  const resultado = precio1 - precio2;
  return resultado;
}

console.log(restarPrecios(20, 10));

function formatearTitulo(titulo) {
  const tituloMayus = titulo.toUpperCase();
  const tituloFormateado = `*** ${tituloMayus} ***`;
  return tituloFormateado;
}

console.log(formatearTitulo("Origen"));

for (let i = 0; i < peliculas.length; i++) {
  console.log(formatearTitulo(peliculas[i].titulo));
}

function obtenerPelisDisponibles(listaPelis) {
  const disponibles = [];

  for (let i = 0; i < listaPelis.length; i++) {
    if (listaPelis[i].disponible) {
      disponibles.push(listaPelis[i].titulo);
}
  }
  return disponibles;
}

console.log(obtenerPelisDisponibles(peliculas));
