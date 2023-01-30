//VARIABLES

const formulario = document.querySelector('form');
const btnEnviar = document.querySelector('#enviar');
const nombreForm = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const mensajeError = document.createElement('p');
const nombreError = document.createElement('p');
const emailError = document.createElement('p');

// EVENTOS

document.addEventListener('DOMContentLoaded', ()=> {
    console.log(email);
    console.log(nombreForm);
    console.log(mensaje);
})

window.addEventListener('scroll', () => {

    const inicio = document.querySelector('.inicio');
    let ubicacion = inicio.getBoundingClientRect();
    const nav = document.querySelector('nav');
    const titulo = document.querySelector('.titulo');
    
    if(ubicacion.top < 40) {
        nav.classList.remove('hidden');
        titulo.classList.add('mt-10');
    } else if(ubicacion.top > 40) {
        nav.classList.add('hidden');
        titulo.classList.remove('mt-10');
    }
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
});

nombreForm.addEventListener('blur', e => {

    nombreError.textContent = 'Tienes que poner tu nombre';
    nombreError.classList.add('text-red-500', 'text-center', 'px-2', 'py-2', 'bg-red-200', 'mb-2');

    if(e.target.value.length === 0) {
        nombreForm.classList.add('bg-red-200');
        formulario.appendChild(nombreError);
    } else if(e.target.value.length < 3){
        nombreForm.classList.add('bg-red-200');
        nombreError.textContent = 'El nombre es inválido';
        formulario.appendChild(nombreError);
        
    } else if(e.target.value.length > 2) {
        nombreForm.classList.remove('bg-red-200');
        nombreForm.classList.add('bg-green-200');
    }
});

mensaje.addEventListener('blur', e => {

    
    mensajeError.textContent = `Como minimo debe tener 30 carácteres`;
    mensajeError.classList.add('text-red-500', 'text-center', 'px-2', 'py-2', 'bg-red-200', 'mb-2');

    if(e.target.value.length < 30) {
        mensaje.classList.add('bg-red-200');
        formulario.appendChild(mensajeError);
    } else if(e.target.value.length > 30){
        mensaje.classList.remove('bg-red-200');
        formulario.removeChild(mensajeError);
    }

});