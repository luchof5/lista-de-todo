// variables
const formulario =  document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tareas');
let tweets = [];


// Eventos
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTexto)
}


// Funciones
function agregarTexto(e) {
    e.preventDefault();

    // Donde se ingres el texto
    const texto = document.querySelector('#miAreaTexto').value;

    console.log(texto);

    if (texto == '') {
        mostrarError('No se escribio nada');
        return;
    }
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