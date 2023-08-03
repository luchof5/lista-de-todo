// variables
const formulario =  document.querySelector('#formulario');
const listaTareas = document.querySelector('#lista-tareas');
let tareas = [];


// Eventos
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTexto)
}


// Funciones
function agregarTexto(e) {
    e.preventDefault();

    // Text area
    const texto = document.querySelector('#miAreaTexto').value;

    console.log(texto);

    if (texto == '') {
        mostrarError('No se escribio nada');
        return;
    }

    const textoObj = {
        id: Date.now(),
        texto
    }

    // Agregamos al arreglo
    tareas = [... tareas, textoObj]

    // Agregamos el Html
    crearHtml();

    // Reiniciar el Htmal
    formulario.reset();
}


function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimína la alerta despuies de 3 segúndos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHtml() {

    limpiarHtml();

    if(tareas.length > 0) {
        tareas.forEach(texto => {

            const li = document.createElement('li');
            li.innerHTML = texto.texto;
            // Botón de eliminar
            const btnElminar = document.createElement('button');
            btnElminar.innerHTML = 'X';
            
            
            li.appendChild(btnElminar);
            listaTareas.appendChild(li);
            
            btnElminar.onclick = () => {
                borrarTarea(texto.id)
            }     
        });
    }
}

// Elminar tarea
function borrarTarea(id) {
    tareas = tareas.filter ( texto => texto.id !== id);

    crearHtml();
}

// Limpiar Html
function limpiarHtml() {
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }
}


