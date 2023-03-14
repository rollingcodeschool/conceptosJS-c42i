// crear un array vacio
let frutas = [];

//crear un array con datos
let peliculas = ['los vengadores: endgame', 2019, 'Ant-man', 'Black Adam', true];

// cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(peliculas);

// mostrar el arreglo peliculas como una lista
document.write('<h2>Lista de peliculas</h2>')
document.write('<ul>')

for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`)
}

document.write('</ul>')
