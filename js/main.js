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
    let finalMessage = slicedText + "...";
    return finalMessage;
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

//Ejercicio 52
const isPensioner = (age) => age >= 60;
console.log(isPensioner (61));
console.log(isPensioner (59));

//Ejercicio 53
const isMister= (type) => type === 'Mister';
console.log(isMister('Mister'));
console.log(isMister('Sea'));


//Ejercicio 54
const isInternationalPhone = (string) => {
    let firstCharacter = "+";
    let firstDigit = string[0];
    return firstCharacter === firstDigit;
  };

  console.log(isInternationalPhone("+5524222051"));
  console.log(isInternationalPhone("5524222051"));

//Ejercicio 55
const isLeapYear = (year) => {
    let result = (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0)
    return result
  };

console.log(isLeapYear(2018));
console.log(isLeapYear(2017));
console.log(isLeapYear(2016));


//Ejercicio 56
function isPalindrome(word) {
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversedWord;
}

function isNotPalindrome(word) {
    return !isPalindrome(word);
}


console.log(isPalindrome('ala'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('hexlet'));
console.log(isPalindrome('AlA'));

console.log(isNotPalindrome('ala'));
console.log(isNotPalindrome('radar')); 
console.log(isNotPalindrome('hexlet')); 
console.log(isNotPalindrome('AlA'));   

//Ejercicio 57
let str = "Hexlet"

function getLetter(str, position) {
    if(position > 0  && position <= str.length){
        return str[position - 1];
    } else{
        return "";
    }
}

console.log(getLetter(str, 11));
console.log(getLetter(str, 1));  
console.log(getLetter(str, 0));  
console.log(getLetter(str, 6));

//Ejercicio 58
function guessNumber(number) {
    if(number === 42){
        return "You win!";
    } else{
        return "Try again!";
    }
}

console.log(guessNumber(42));
console.log(guessNumber(4));

//Ejercicio 59

function normalizeUrl(direction) {
    if(direction.startsWith("https://")){
        return direction;
    } else{ 
        return "https://" + direction;
    }
}

console.log(normalizeUrl("google.com")); // =>"https://google.com"
console.log(normalizeUrl("https://ai.fi")); // => "https://ai.fi"

//Ejercicio 60
function whoIsThisHouseToStarks(familyName) {
    if(familyName === "Karstark" || familyName === "Tally"){
        return "friend";
    } else if(familyName === "Lannister" || familyName === "Frey"){
        return "enemy";
    } else{
        return "neutral";
    }
}

console.log(whoIsThisHouseToStarks('Karstark'));
console.log(whoIsThisHouseToStarks('Frey'));
console.log(whoIsThisHouseToStarks('Joar'));
console.log(whoIsThisHouseToStarks('Ivanov'));

//Ejercicio 61
    //Solución 1
function convertText(inputText) {
    if (inputText === '') {
        return '';
    } else if (inputText[0] === inputText[0].toUpperCase()) {
        return inputText;
    } else {
        return inputText.split('').reverse().join('');
    }
}

    //Solución 2
function convertText(inputText) {
    return (inputText === '') ? '' : (inputText[0] === inputText[0].toUpperCase()) ? inputText : inputText.split('').reverse().join('');
}

console.log(convertText('Hello'));  // => Hello
console.log(convertText('hello'));  // => olleh
console.log(convertText(''));       // => ''

//Ejercicio 62
function getNumberExplanation(number) {
    switch (number) {
        case 666:
          return 'devil number';
        case 42:
          return 'answer for everything';
        case 7:
          return 'prime number';
        default:
            return 'just a number';
    }
}

console.log(getNumberExplanation(8));   //=>  just a number
console.log(getNumberExplanation(666)); //=>  devil number
console.log(getNumberExplanation(42));  //=>  answer for everything
console.log(getNumberExplanation(7));   //=>  prime number

//Ejercicio 63
function printNumbers(lastNumber)  {
    let i = lastNumber;
    while(i >= 1){
        console.log(i);
        i--;
    }
    console.log("finished!");
}

printNumbers(4);

//Ejercicio 64
function multiplyNumbersFromRange(start, finish) {
    let i = start;
    let multiply = 1; //---> Se requiere inicializar con el elemento neutro de la operación
  
    while (i <= finish) { 
        multiply = multiply * i; 
      i++; 
    }

    return multiply;
}

console.log(multiplyNumbersFromRange(1,5)); // => 1 * 2 * 3 * 4 * 5 = 120
console.log(multiplyNumbersFromRange(2,3)); // => 2 * 3 = 6
console.log(multiplyNumbersFromRange(6,6)); // => 6

//Ejercicio 65
function joinNumbersFromRange(start, finish) {
    let strNumber = ""; //---> Se requiere inicializar con el elemento neutro de la contatenación
    
    while(start <= finish){
        strNumber = strNumber + start.toString();
        start++
    }

    return strNumber;
}

console.log(joinNumbersFromRange(1,1)); // => 1
console.log(joinNumbersFromRange(2,3)); // => 23
console.log(joinNumbersFromRange(5,10)); // => 5678910

//Ejercicio 66
function printReversedWordBySymbol(word) {
    let iterator = word.length -1;

    while(iterator >= 0){
        console.log(word[iterator]);
        iterator--;
    }
}
printReversedWordBySymbol("hexlet");

//Ejercicio 67
const countChars = (str, char) => {
    let i = 0;
    let count = 0;

    while (i < str.length) {
       str = str.toLowerCase();
       char = char.toLowerCase();

      if (str[i] === char) {
        count = count + 1;
      }//if else

      i = i + 1;
    }//while
  
    return count;
  };//countStars

  console.log(countChars('jetsael', 'a')); // => 2
  console.log(countChars('HexlEt', 'e')); // => 2
 
  //Ejercicio 68
  function even(str) {
    let result = "";
    let i = 1;
    while (i < str.length) {
      result += str[i]; 
      i += 2;
    }
    return result;
  }
  
  console.log(even("jetsael")); 

  //Ejercicio 69
  function filterString(str, char) {
    let result = "";
    let i = 0;

    while (i < str.length) {

      if (str[i] !== char) {
        result += str[i];
      }

      i++;
    }

    return result;
  }
  
  const str1 = 'If I look back I am lost';
  console.log(filterString(str1, 'I')); 
  
  const str2 = 'zz Zorro';
  console.log(filterString(str2, 'Z')); 

  //Ejercicio 70
  function makeItFunny(text, n) {
    if (typeof text !== 'string' || typeof n !== 'number' || n <= 0) {
        return "Entrada inválida";
    }

    const newText = text.split('').map((char, index) => {
        if ((index + 1) % n === 0) {
            return char.toUpperCase();
        }
        return char;
    }).join('');

    return newText;
}

const texto = 'I never look back';
console.log(makeItFunny(texto, 3)); //=> 'I NevEr LooK bAck'

//Ejercicio 71
function hasChar(str, char) {
    return str.includes(char);
}

console.log(hasChar('Hexlet', 'H')); // true
console.log(hasChar('Hexlet', 'h')); // false
console.log(hasChar('Awesomeness', 'm')); // true
console.log(hasChar('Awesomeness', 'd')); // false

//Ejercicio 72
function encrypt(message) {
    let encryptedMessage = '';

    for (let i = 0; i < message.length - 1; i += 2) {
        encryptedMessage += message[i + 1] + message[i];
    }

    // Si la longitud de la cadena es impar, el último carácter permanece en su lugar
    if (message.length % 2 !== 0) {
        encryptedMessage += message[message.length - 1];
    }

    return encryptedMessage;
}

console.log(encrypt('move'));    // Output: omev
console.log(encrypt('attack'));  // Output: taatkc
console.log(encrypt('go!'));     // Output: og!

/*¿Puede esta función descifrar un mensaje cifrado? No, esta función no puede descifrar un mensaje cifrado ya que no guarda información sobre el orden original de los caracteres intercambiados. 
Para poder descifrar un mensaje cifrado con este algoritmo, necesitarías tener acceso a la clave utilizada (en este caso, el orden original de los caracteres), 
lo cual no se conserva en el proceso de cifrado.*/