// var nombre = prompt('ingrese su nombre');

// var apellido = prompt('ingrese su apellido');

// var muestra_nombre = 'el usuario logeado es: ' + nombre + ' ' + apellido;

// console.log(muestra_nombre);

// // const mostrar = document.getElementById('user');
// const mostrar = document.getElementById('user');

// console.log('que es mostrar?', mostrar);
// console.log('que es mostrar?', typeof mostrar);
// mostrar.innerHTML = muestra_nombre;

// var numero_en_texto = '2';
// console.log('el numero');

// const userInput = document.getElementById('userInput');

// console.log(userInput);
// console.log(userInput.value);

// Revisen esto en https://pythontutor.com/ - Esto no se renderiza en la consola
// var a = 950;

// if (a < 576) {
//   console.log('xs');
// } else if (a < 768) {
//   console.log('sm');
// } else if (a < 962) {
//   console.log('md');
// } else {
//   console.log('xl');
// }

// Revisen esto en https://pythontutor.com/ - Hagan la prueba de poner a=350
// var a = 350;

// if (a < 576) {
//   console.log('xs');
// }
// if (a < 768) {
//   console.log('sm');
// }
// if (a < 962) {
//   console.log('md');
// } else {
//   console.log('xl');
// }

// ejercicio de la temperatura

// var temp = prompt('ingrese la temperatura que ve en el termometro');

// console.log(temp);

// if (temp < 0) {
//   console.log('Hace mucho frio');
// } else if (temp <= 10) {
//   console.log('Hace frio');
// } else if (temp <= 20) {
//   console.log('Temperatura agradable');
// } else if (temp <= 30) {
//   console.log('hace calor');
// } else {
//   console.log('hace mucho calor');
// }

// if (temp > 30) {
//   console.log('hace mucho calor');
// } else if (temp > 20) {
//   console.log('hace calor');
// } else if (temp > 10) {
//   console.log('Temperatura agradable');
// } else if (temp > 0) {
//   console.log('Hace frio');
// } else {
//   console.log('Hace mucho frio');
// }

// if (temp < 30) {
//   console.log('hace calor');
// } else if (temp < 20) {
//   console.log('temp agradable');
// } else if (temp < 10) {
//   console.log('hace frio');
// } else {
//   console.log('hace mucho calor');
// }

// if (temp < 0) {
//   console.log('Hace mucho frio');
// }
// if (temp <= 10) {
//   console.log('Hace frio');
// }
// if (temp <= 20) {
//   console.log('Temperatura agradable');
// }
// if (temp <= 30) {
//   console.log('hace calor');
// } else {
//   console.log('hace mucho calor');
// }

function pintar_body(color = 'lightgreen') {
  var body = document.querySelector('body');

  console.log('el valor que le estoy pasando es: ', color);

  body.style.backgroundColor = color;
}

function suma(a, b) {
  return a + b;
}

alert(suma(3, 5)); // 8
var resultado = suma(3, 5);

console.log(resultado);

// var dark_body = '#131313';
// var light_body = '#e1e1e1';

// pintar_body();
