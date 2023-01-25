function calcular(){
    // Solicitud GET (Request).
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Exito
        .then(response => response.json()) // convertir a json
        .then(json => console.log(json)) //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)) // Capturar errores

}