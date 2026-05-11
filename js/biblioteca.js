// MINI BIBLIOTECA

const biblioteca = [
  {
    titulo: "Guerra y Paz",
    autor: "Lev Tolstoi",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Anna Karenina",
    autor: "Lev Tolstoi",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "Antologia de la poesia medieval catalana",
    autor: "Diversos",
    categoria: "poesia",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "L'Odisea",
    categoria: "drama",
    autor: "Homero",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "La Ilíada",
    autor: "Homero",
    categoria: "drama",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Poema del Mio Cid",
    autor: "Anónimo",
    categoria: "poesia",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Veinte mil leguas de viaje submarino",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "De la Terra a la Lluna",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "Cinco semanas en globo",
    autor: "Jules Verne",
    categoria: "aventuras",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Robinson Crusoe",
    autor: "Daniel Defoe",
    categoria: "aventuras",
    idioma: "català",
    epoca: "clásica",
  },
  {
    titulo: "Germinal",
    autor: "Émile Zola",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Notre Dame de Paris",
    autor: "Victor Hugo",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XIX",
  },
  {
    titulo: "Los Miserables",
    autor: "Victor Hugo",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Yo, robot",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Fundació",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "Ciberiada",
    autor: "Stanislaw Lem",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Solaris",
    autor: "Stanislaw Lem",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "El hombre bicentenario",
    autor: "Isaac Asimov",
    categoria: "ciencia-ficción",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Tokio Blues",
    autor: "Haruki Murakami",
    categoria: "drama",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Romancero Gitano",
    autor: "Federico García Lorca",
    categoria: "poesia",
    idioma: "español",
    epoca: "s.XX",
  },
  {
    titulo: "Los aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    categoria: "misterio",
    idioma: "español",
    epoca: "s.XIX",
  },
  {
    titulo: "Rebelió a la granja",
    autor: "George Orwell",
    categoria: "drama",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "La Divina Comedia",
    autor: "Dante Alighieri",
    categoria: "drama",
    idioma: "español",
    epoca: "clásica",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
  {
    titulo: "Cròniques Marcianes",
    autor: "Ray Bradbury",
    categoria: "ciencia-ficción",
    idioma: "català",
    epoca: "s.XX",
  },
];

// Ordenar alfabèticament
// biblioteca.sort(function (a, b) {
//     return a.titulo.localeCompare(b.titulo, 'es', { numeric: true })
// });

// ==========================================================================================================
// EJERCICIO 1
// Libros disponibles
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Obtener la dirección HTML donde mostrar el resultado
const listaLibros = document.getElementById("listaLibros");

// Ordenando la biblioteca
biblioteca.sort(function (a, b) {
  return a.titulo.localeCompare(b.titulo, "es", { numeric: true });
});

// Crear el código HTML de una lista ordenada
let html1 = "<ol>";
biblioteca.forEach((obra) => {
  html1 += `<li>${obra.titulo}</li>`;
});
html1 += "</ol>";

// Insertar el código HTML dentro del contenedor(div) de la página
listaLibros.innerHTML = html1;

// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

// Obtener la dirección HTML donde mostrar el resultado
const salidaFiltrada = document.getElementById("salidaFiltrada");

// Crear el código HTML de una lista ordenada
let html2 = "<ol>";
biblioteca.forEach((libro) => {
  html2 += `<li><span class="autor"> ${libro.autor} </span>: <span class="obra">${libro.titulo}</span> (${libro.categoria}, ${libro.idioma}, ${libro.epoca})</li>`;
});
html2 += "</ol>";

salidaFiltrada.innerHTML = html2;

const formFiltrado = document.forms["formFiltrado"];

formFiltrado.addEventListener("change", () => {
  let itemCategoria = formFiltrado.categoria.value;
  let itemIdioma = formFiltrado["idioma"].value;
  let itemEpoca = formFiltrado.epoca.value;

  const mensajeObraDesconocida =
    "No hay ningún libro con estas características.";
  let obraEncontrada = false;

  // Mostrar por consola los títulos de los libros cuya categoría sea la que ha elegido el usuario
  let html2 = "<ol>";

  biblioteca.forEach((libro) => {
    if (
    ( itemCategoria === "todo" || libro.categoria === itemCategoria) &&
    ( itemIdioma === "todo" || libro.idioma === itemIdioma) &&
    ( itemEpoca === "todo" || libro.epoca === itemEpoca)
    ) {
      html2 += `<li><span class="autor"> ${libro.autor} </span>: <span class="obra">${libro.titulo}</span> 
(${libro.categoria}, ${libro.idioma}, ${libro.epoca})</li>`;
      obraEncontrada = true;
    }
  });
  html2 += "</ol>";

  if (!obraEncontrada) {
    html2 = "<p>No hay ningún libro con estas características.</p>";
  }

  salidaFiltrada.innerHTML = html2;
  // console.log(itemCategoria, itemIdioma, itemEpoca);
});

// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)

// Obtener el formulario
const formAutor = document.forms['formAutor']

// Activar un evento para el formulario
formAutor.addEventListener('submit', (event) => {
    // Impedir la recarga automática de la página (imprecindible)
    event.preventDefault()

    // Obtenemos lo que ha escrito el usuario en el input
    // de name="autor"
    let autor = formAutor.autor.value
    console.log(autor);
})


// Si el autor no está en la bilioteca mostrar texto de aviso

// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Una vez creada será leída en lugar de la lista inicial
// Actualizar automáticamente el listado de obras del ejercicio 1

// ==========================================================================================================
// EJERCICIO 5
//  * Añadir un campo "apellido" para separarlo del campo "nombre", actualmente juntos en la colección de obras.
//    Utilizar ese campo apellido en el ejercicio 3 (para la búsqueda) y en el ejercicio 4 (para la inclusión de más obras).
//    La salida por pantalla en el ejercicio 3 sería así, por ejemplo:
//    Asimov, Isaac : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)
//    Los autores se mostrarán en orden alfabético descendente (de la A a la Z) según su apellido
