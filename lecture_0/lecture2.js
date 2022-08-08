//tipos de de datos

//String
var nombre="olga";
console.log(nombre);

// dato numerico
var numero=1000

// dato tipo object

var objeto ={
    nombre : "Carlos",
    apellido: "Salona",
    telefono: "45354"
}

console.log(objeto);

// usando typeof puedo saber el tipo de dato de una variable.
//las varaiables pueden cambiar de tipo segun su contenido ya que no se fija como en otros lenguajes 
folio="santo";
console.log(typeof folio);

// boolean (true and false)
bandera= false;
console.log(typeof bandera);

//tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo dato Symbol
simbolo= Symbol("mi simbolo"); //se utiliza para crear una variable de valor unico
console.log(typeof simbolo);

//tipo clase es una funcion
class persona{
    constructor (nombre, apellido){
    this.nombre = nombre;
    this.apellido=apellido;
    }
}

console.log(typeof persona);

// tipo undifined. se tiene de manera default cuando sea crea una variable sin un valor definido
var x;
console.log(typeof x);

//null = ausencia de valor

var y = null;
console.log(typeof y);

//array, so tipo objetos 

autos=["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

// valor cadena vacia -- Sin tipo de dato String
z="";
console.log(z);

// contacatenacion de cadenas
nombre1="Rani";
apellido2= "gomez";
nombreCompleto= nombre1+ " "+apellido2;
console.log(nombreCompleto);

nombreCompleto2= "carlos"+ " "+ "Lara";
console.log(nombreCompleto2);

//conquetando nombres y variables 

r= nombre1 +219;
console.log(r);

// declaraciones de variables a traves de let y const para constantes las constantes no permte cambiar el valor de las variables 

let ss;
ss= "juan";

const ape="perez";
ape= "lara";
