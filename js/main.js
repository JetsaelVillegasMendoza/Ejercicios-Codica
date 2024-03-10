//Ejercicio 1
console.log('Hello, World')

//Ejercicio 2

    //You know nothing, Jon Snow!

//Ejercicio 3
console.log('Robert');
console.log('Stannis');
console.log('Renly');

//Ejercicio 4
console.log(9780262531962);

//Ejercicio 5
console.log('What Is Dead May Never Die.');

//Ejercicio 6
let x = 81 / 9; //=> 9
console.log(x);

//Ejercicio 7
x = 6 - (-81);
console.log(x);

//Ejercicio 8
x = 3 ** 5; //=> 243
let y = (-8) / (-4); //=> 2

console.log(x);
console.log(y);

//Ejercicio 9
y = ((8 / 2) + 5) - (-3 / 2); //=> 10.5
console.log(y);

//Ejercicio 10
x = 70 * 3 + 4 / 8 + 2; //=> 49
x = 70 * (3 + 4) / (8 + 2); //Colocación de paréntesis para indicar qué operaciones se realizarán primero

console.log(x)

//Ejercicio 11 //=> 0.0858
x = 0.39 * 0.22;
console.log(x);

//Ejercicio 12
x = (Infinity + Infinity) / 10; //=> Infinity
console.log(x);

//Ejercicio 13
x = NaN + 1; //=> NaN
console.log(x);

//Ejercicio 14
    //"la diferencia entre el cuadrado de cinco y el producto de tres y siete"
x = ((5**2) - (3*7)); 
console.log(x);

//Ejercicio 15
console.log ("\"Khal Drogo's favorite word is \"athjahakar\"\"") //=> "Khal Drogo's favorite word is "athjahakar""

//Ejercicio 16
console.log('- Did Joffrey agree? \n- He did. He also said "I love using \\n".')

//Ejercicio 17
console.log("Winter " + "came " + "for " + "the " + "House " + "of " + "Frey" + ".")//=> Winter came for the House of Frey.
                                    
//Ejercicio 18
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

//Ejercicio 19
let motto = "What Is Dead May Never Die!";
console.log(motto);

//Ejercicio 20
let name1 = 'Brienna';
name1 = 'anneirB';
console.log(name1);

//Ejercicio 21
let myBrothersCount = 2;
console.log(myBrothersCount);

//Ejercicio 22
let family = 'Targaryen';
let pet = 'Dragon'; //Variable que no estaba declarada

console.log(family);
console.log('and');
console.log(pet);

let who = "dragon's" + 'mother';
console.log(who);

//Ejercicio 23
let eurosCount = 100;
let dollarsPerEuro = 1.25;
let yuanesPerDollar = 6.91;
let dollarsCount = eurosCount * dollarsPerEuro;
let yuansCount = dollarsCount * yuanesPerDollar;

console.log(dollarsCount)
console.log(yuansCount)

//Ejercicio 24
let greeting = 'Hello';
let firstName = 'Joffrey';
let intro = 'Here is important information about your account security.';
let info = "We couldn't verify your mother's maiden name.";

console.log(greeting + ", " + firstName + "!")
console.log(intro + "\n" + info);

//Ejercicio 25
let firstNumber = 11;
let secondNumber = -100;

console.log(firstNumber * secondNumber);

//Ejercicio 26
let king = 'King Balon the 6th';
let numberCastle = 6;
let numberRooms = 17;

let currentRooms = numberCastle * numberRooms;
console.log(king + " has " + currentRooms + " rooms.")

//Ejercicio 27
const army = "the white walkers";
console.log(army);

//Ejercicio 28
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`);

//Ejercicio 29
const nameCharacter = 'Na\nharis';
console.log(nameCharacter[7]); // => s

//Ejercicio 30
let number = -0.304;
console.log(number)

//Ejercicio 31
let sinEspecificar;
console.log(sinEspecificar);

//Ejercicio 32
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

let firstLetter = "h";
let secondLetter = "o";
let thirdLetter = "d";
let fourthLetter = "o";
let fiftLetter = "r";

console.log(`${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}${fiftLetter}`);

//Ejercicio 33
const exp = "7" - ((-8) - (-2)); //=> 13 Porque el operaddor "-" convierte la cadena de texto a un número. 

console.log (exp);

//Ejercicio 34
const company1 = 'Apple';
const company2 = 'Samsung';

const cadenaNombres = company1 + company2;
const result = cadenaNombres.length;

console.log(result);

//Ejercicio 35
const soldiersCount = -2309;
console.log(Math.abs(soldiersCount));

//Ejercicio 36
const numberDecimal = 923.2238;
let roundedNumber = Math.ceil(numberDecimal);

console.log(roundedNumber);

//Ejercicio 37
number = 10.1234;
console.log(number.toFixed(2))

//Ejercicio 38
let textChain = 'Never forget what you are, for surely the world will not';
const firstLastIndex = "First: "  + textChain[0] + "\n" + "Last: " + textChain[textChain.length - 1];

console.log(firstLastIndex);

//Ejercicio 39
let arrayNumbers = [3, 10, 22, -3, 0];
console.log(Math.min(...arrayNumbers));

//Ejercicio 40
console.log(Math.round(Math.random() * 10));

//Ejercicio 41
motto = 'Family, Duty, Honor';
console.log(typeof(motto));

//Ejercicio 42
let text = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(text.length);

//Ejercicio 43
text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
const lowerText = text.toLowerCase();

console.log(lowerText);

//Ejercicio 44
firstName = '  Grigor   \n';
firstName = firstName.trim();

console.log(firstName);

//Ejercicio 45
textChain = 'Never forget what you are, for surely the world will not';
console.log("First: "  + textChain[0] + "\n" + "Last: " + textChain[textChain.length - 1]);

//Ejercicio 46
const text2 = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text2.slice(5, 15).trim().length);

//Ejercicio 47
motto = "Winter is coming";

function printMotto() {
    console.log(motto);
}

printMotto();

//Ejercicio 48
const sayHurrayThreeTimes = () => {
    return "hurray! hurray! hurray!"
 }
 
const hurray = sayHurrayThreeTimes()
console.log(hurray);
 
//Ejercicio 49
const truncate = (text, length) =>{
    let slicedText = text.slice(0, length);
    return slicedText;
}

text = "Jetsael"
let length = 4
console.log(truncate(text, length))

//Ejercicio 50
let card = "";

const getHiddenCard = (card, asterisk = 4)=>{
    let hiddingChars = "*".repeat(asterisk);
    card = card.slice(-4);
    let hiddenCard = hiddingChars + card;

    return hiddenCard;
}

card = '1234567812345678';
console.log(getHiddenCard(card));

//Ejercicio 51
name1 = "";

const capitalize = (name1) => {
    slicedChar = name1.slice(0,1);
    slicedName1 = name1.slice(1, name1.length);
    finalName = slicedChar.toUpperCase() + slicedName1;

    return finalName;
}

name1 = "peter";
console.log(capitalize(name1));