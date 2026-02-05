var nombre = prompt('ingrese su nombre');

var apellido = prompt('ingrese su apellido');

var muestra_nombre = 'el usuario logeado es: ' + nombre + ' ' + apellido;

console.log(muestra_nombre);

// const mostrar = document.getElementById('user');
const mostrar = document.getElementById('user');

console.log('que es mostrar?', mostrar);
console.log('que es mostrar?', typeof mostrar);
mostrar.innerHTML = muestra_nombre;

var numero_en_texto = '2';
console.log('el numero');

const userInput = document.getElementById('userInput');

console.log(userInput);
console.log(userInput.value);
