document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario
    document.getElementById('appointment-form').addEventListener('submit', handleFormSubmit);
    
    // Manejar el menú hamburguesa
    setupMobileMenu();
    
    // Efecto de scroll para el header
    setupScrollHeader();
});


function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
    
    // Aquí normalmente haríamos una petición AJAX para enviar los datos al servidor
    // Por ahora solo mostraremos un mensaje de éxito
    
    alert(`Gracias ${name}, tu cita ha sido reservada. Te esperamos el ${date}.`);
    
    // Resetear el formulario
    e.target.reset();
}

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu ul');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

function setupScrollHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});