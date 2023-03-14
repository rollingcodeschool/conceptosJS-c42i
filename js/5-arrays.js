// crear un array vacio
let frutas = [];

//crear un array con datos
let peliculas = ['los vengadores: endgame', 2019, 'Ant-man', 'Black Adam', true];

// cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(peliculas);

// mostrar el arreglo peliculas como una lista
document.write('<h2>Lista de peliculas</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

// agregar un elemento al principio del arreglo
peliculas.unshift('Harry Potter', 'Mario Bross');

document.write('<h2>Agregamos un elemento al principio del arreglo de peliculas</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

// agregar un elemento en el medio del array
// splice(posicion donde agrego un item, elementos que quiero borrar, el elemento que quiero agregar)
peliculas.splice(3,0, 'La ballena');

document.write('<h2>Agregamos un elemento en el medio del array de peliculas (posición 3)</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

//agregamos un elemento al final del array
peliculas.push('Iron Man');
document.write('<h2>Agregamos un elemento en final del array de peliculas</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

//modificar un elemento del array
peliculas[7] = 'Thor'; 

document.write('<h2>Modificamos un elemento del array de peliculas</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

//eliminar un elemento del array

peliculas.pop();

document.write('<h2>Eliminamos el ultimo elemento del array de peliculas</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

// borrar varios elementos
peliculas.splice(5);
document.write('<h2>Eliminamos todos los elementos desde la posicion 5 del array</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');

//TODO queda pendiente borrar los elementos del medio del array