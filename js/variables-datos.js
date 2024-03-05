const myName = "Jetsael Villegas Mendoza";
console.log(myName);

let myAge = 28;
console.log(myAge);

myAge = 30;
console.log(myAge);

//myName = "Jorge"; //=>Esto marcará un error porque a las constantes no se les puede cambiar el valor.

//Boolean - true | false
const isLogged = true; //camelCase
const is_logged = false; //snake-case

const myNumber= 10;
const myNumber2= 15; //No se pueden poner número al inicio del nombre de la variable, pero sí al final.

//String
let myString = "String";
let myNumberString = "2";

//Number
let myNum = 20;

//Array []
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let myStringArray = ["1", "2", "3", "4", "5"];
console.log(myStringArray);

const myMixArray = ["Hulk", "Miss Marvel", 25, 30, [35, "Avengers", 40]];
console.log(myMixArray)

//Object = Colección de datos ordenada (llave, valor)
const person = {
    nombre: "Jetsael",
    edad: 29,
    pais: "México",
    comidaFavorita: ["Tacos", "Enchiladas", "Mole"]
}

console.log(person);

//Concatenación
const myWord = "Hello World!";
const myNumber3 = "2";
let myNumber4 =  3;
let myNumber5 = 10;

console.log(myWord + myNumber3);
console.log(myNumber4 + myNumber5);
console.log(myNumber3 + myNumber4); //El número 3 se convierte en string.
console.log(myNumber4 + myNumber3); //También convirtió en número a String.

//Guardar valores de variables en otras variables
const myResult = myNumber4 + myNumber5;
console.log(myResult);

//Undefined = Ausencia de valor
let currentYear
console.log(currentYear);
currentYear = 2024;
console.log(currentYear);