window.addEventListener('scroll', () => {
    let inicio = document.querySelector('.inicio');
    let ubicacion = inicio.getBoundingClientRect();
    let nav = document.querySelector('nav');
    let titulo = document.querySelector('.titulo');
    
    if(ubicacion.top < 40) {
        nav.classList.remove('hidden',);
        titulo.classList.add('mt-10')
    } else if(ubicacion.top > 40) {
        nav.classList.add('hidden');
        titulo.classList.remove('mt-10')
    }
})
