// Crea una lista de los elementos que quieres buscar
var list = Array.from(document.querySelectorAll('.recipe-title')).map(function(element) {
    return { text: element.textContent.toLowerCase() };
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
    var results = fuse.search(input.value.toLowerCase());
  
    // Obtiene el contenedor de resultados
    var resultsContainer = document.getElementById('results');
  
    // Limpia los resultados anteriores
    resultsContainer.innerHTML = '';
  
    // Para cada resultado, crea un nuevo elemento y agrégalo al contenedor de resultados
    results.forEach(function(result) {
      var resultElement = document.createElement('p');
      resultElement.textContent = result.item.text;
      resultsContainer.appendChild(resultElement);
    });
  });