// // ES5
// function VideoJuego(nombre, precio){
//     // propiedad
//     this.nombre = nombre;
//     this.precio = precio;
// }
// //instanciar un objeto
// let juego = new VideoJuego('Super mario', 3500)
// let juego2 = new VideoJuego('terraria', 129);

// console.log(juego);
// console.log(juego2);

// ES6
class VideoJuego{
    //crear propiedades privadas
    #nombre;
    //metodo constructor
    constructor(paramNombre, genero, precio, desarrollador){
        this._genero = genero;
        this.#nombre = paramNombre;
        this._precio = precio;
        this._desarrollador = desarrollador; 
        this._valoracion = 0;// propiedad por defecto
    }
    //set y get propiedades computadas
    get genero(){
        return this._genero;
    }

    set genero(nuevoGenero){
        if( nuevoGenero.length > 0){
            this._genero = nuevoGenero
        }
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nuevoNombre){
        if( nuevoNombre.length > 0){
            this.#nombre = nuevoNombre;
        }
    }

    //metodos
    mostrarInformacion(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this._precio}</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this._desarrollador}</li>
        </ul>`)
    }
}

class JuegoSupervivencia extends VideoJuego{
    #protagonista;
    #antagonista;
    constructor(nombre, genero, precio, desarrollador, protagonista, antagonista){
      //invocar al constructor de videoJuego
      super(nombre,genero,precio, desarrollador);
      this.#protagonista = protagonista
      this.#antagonista = antagonista
    }

    get protagonista(){
        return this.#protagonista;
    }

    set protagonista(nuevoProtagonista){
        if( nuevoProtagonista.length > 0){
            this.#protagonista = nuevoProtagonista;
        }
    }
    get antagonista(){
        return this.#antagonista;
    }

    set antagonista(nuevoAntagonista){
        if( nuevoAntagonista.length > 0){
            this.#antagonista = nuevoAntagonista;
        }
    }

    mostrarInformacion(){
        // super.mostrarInformacion();
        document.write(`<p>Protagonista: ${this.protagonista} <br> Antagonista: ${this.antagonista}</p>`);
    }

}

const stardewValley = new VideoJuego('Stardew valley','Simulador de granja', 150, 'Apend');

console.log(stardewValley)

document.write(`<p>El juego ${stardewValley.nombre} tiene valoracion ${stardewValley._valoracion}</p>`)
document.write(`<p>El juego ${stardewValley.nombre} tiene el genero ${stardewValley.genero}</p>`);

//modificar el genero
stardewValley.genero = 'La mejor granjita';

document.write(`<p>El juego ${stardewValley.nombre} tiene el genero ${stardewValley.genero}</p>`);

stardewValley.mostrarInformacion();

const residentEvil2 = new JuegoSupervivencia('Resident Evil 2', 'Supervivencia, terror', 1000,'Capcom','Leon','Birkin');


console.log(residentEvil2);

residentEvil2.mostrarInformacion();