//Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector('#lista-carrito tbody');


//Event Listeners
cargarEventListeners();

function cargarEventListeners() {
  //Dispara cuando se presiona agregar-carrito
  cursos.addEventListener("click", comprarCurso);
  //se elimina un curso del carrito
  carrito.addEventListener('click', elimiarCurso);
}

//Funciones
//Funcion que añade el curso al carrito

function comprarCurso(e) {
  e.preventDefault();

  if(e.target.classList.contains('agregar-carrito')){
    let curso = e.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id')
  }
  insertarCarrito(infoCurso);
}

function insertarCarrito(curso){
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>
        <img src="${curso.imagen}" width="100">
      </td>
      <td>
        ${curso.titulo}
      </td>
      <td>
        ${curso.precio}
      </td>
      <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      </td>
  `;
  listaCursos.appendChild(row);

}
//Elimina el curso del carrito en el dom
function elimiarCurso(e){
  e.preventDefault();
  let curso;
  if(e.target.classList.contains('borrar-curso')){
    e.target.parentElement.parentElement.remove();
  }
}

