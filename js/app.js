window.addEventListener('scroll', () => {
    const inicio = document.querySelector('.inicio');
    let ubicacion = inicio.getBoundingClientRect();
    const nav = document.querySelector('nav');
    const titulo = document.querySelector('.titulo');
    
    if(ubicacion.top < 40) {
        nav.classList.remove('hidden');
        titulo.classList.add('mt-10');
    } else if(ubicacion.top > 40) {
        nav.classList.add('hidden', 'lg:hidden');
        titulo.classList.remove('mt-10');
    }
});
