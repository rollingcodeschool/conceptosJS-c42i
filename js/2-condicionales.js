// Estructuras condicionales If

//if(condicion){
// ...
// } else{
//     ...
// }

// Soliticar la edad al usuario e indicar por pantalla si puede votar o no

// tengo que pedirle la edad al usuario
// puede votar a partir de los 16 años

// parseInt('40');
// parseFloat('50.5');
let edad = parseInt(prompt('Ingrese su edad'));

console.log(typeof(edad));
console.log(edad);

if(edad >= 16){
    document.write('Usted debe votar');
}else{
    document.write('No puede votar');
}
