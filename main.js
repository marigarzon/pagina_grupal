// Crea una lista de los elementos que quieres buscar
var list = Array.from(document.querySelectorAll('.recipe-title')).map(function(element) {
    return { text: element.textContent };
});

// Crea una nueva instancia de Fuse con la lista y las opciones
var fuse = new Fuse(list, { keys: ['text'] });

// Obtiene el formulario y el input de búsqueda
var form = document.querySelector('form');
var input = document.getElementById('form-subscribe-Search');

// Cuando se envía el formulario, realiza la búsqueda
form.addEventListener('submit', function(event) {
    // Evita que la página se recargue cuando se envía el formulario
    event.preventDefault();

    // Realiza la búsqueda
    var result = fuse.search(input.value);

    // Muestra los resultados de la búsqueda
    console.log(result);
});