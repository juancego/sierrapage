function openTab(event, tabName) {
    // Ocultar todas las pestañas
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Quitar la clase activa de todos los enlaces de pestañas
    var tabLinks = document.getElementsByClassName('tab-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    // Mostrar la pestaña actual y añadir la clase activa al enlace de pestaña
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';

    // Actualizar el título de la pestaña del navegador
    var pageTitle = "";
    switch(tabName) {
        case 'home':
            pageTitle = "Inicio";
            break;
        case 'services':
            pageTitle = "Servicios";
            break;
        case 'about':
            pageTitle = "Sobre Nosotros";
            break;
        case 'contact':
            pageTitle = "Contacto";
            break;
        case 'survey':
            pageTitle = "Encuesta";
            break;
        default:
            pageTitle = "Transporte Empresarial Siera";
    }
    document.title = pageTitle + " - Transporte Empresarial Siera";
}

// Mostrar la pestaña "Inicio" por defecto
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tab-link').click();
document.getElementById('startSurveyButton').addEventListener('click', function() {
    document.getElementById('introContainer').style.display = 'none';
    document.getElementById('surveyContainer').style.display = 'block';
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const conductor = document.getElementById('conductor').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const horarios = document.getElementById('horarios').value;
    const normas = document.getElementById('normas').value;
    const uniforme = document.getElementById('uniforme').value;
    const aseo = document.getElementById('aseo').value;
    const satisfaccion = document.getElementById('satisfaccion').value;
    const comentarios = document.getElementById('comentarios').value;

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST

    document.getElementById('surveyContainer').style.display = 'none';
    document.getElementById('thankYouContainer').style.display = 'block';
});

document.getElementById('visitWebsiteButton').addEventListener('click', function() {
    window.open('https://www.tu-sitio-web.com', '_blank'); // Reemplaza con la URL de tu página web
});

