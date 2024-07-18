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
        case 'thankyou':
            pageTitle = "Gracias";
            break;
        default:
            pageTitle = "Transporte Empresarial Siera";
    }
    document.title = pageTitle + " - Transporte Empresarial Siera";
}

function startSurvey() {
    document.getElementById('start-survey-btn').style.display = 'none';
    document.getElementById('survey-form').style.display = 'block';
}

function submitSurvey(event) {
    event.preventDefault();
    document.getElementById('survey').style.display = 'none';
    document.getElementById('thankyou').style.display = 'block';
}

// Mostrar la pestaña "Inicio" por defecto
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tab-link').click();
});
