# Ejercicios de Códica

## Los 72 ejercicios de JavaScript que reaclicé en el bootcamp de Códica.

-----

Esta es una recolección de los ejercicios realizados durante el bootcamp de Códica. El objetivo es que otros desarrolladores puedan revisarlos y contrastasr sus soluciones con las mías. 

-----

## Ejercicio 1

Para mostrar algo en la pantalla, es necesario darle al ordenador un comando especial. En el lenguaje JavaScript, ese comando es console.log().

Escribe en el editor el código del ejercicio, carácter por carácter, para que la consola mueste la cadena de texto "Hello, World!

## Ejercicio 2

Crea un comentario de una línea con el texto: `You know nothing, Jon Snow!.

## Ejercicio 3

Muestra en pantalla, uno tras otro, estos tres nombres: Robert, Stannis, Renly. 

El resultado en pantalla debe ser:

```
Robert
Stannis
Renly

```

Utiliza una llamada console.log() para cada nombre.

## Ejercicio 4

Solamente es un ejercicio de práctica. Muestra en pantalla el número 9780262531962.

Experimenta con la salida. Pasa otro número o una cadena de texto. Observa la respuesta del sistema, intenta traducirla y entenderla.

## Ejercicio 5

Esta tarea no está directamente relacionada con la lección. Pero será útil practicar la salida en la pantalla.

Muestra en la pantalla What Is Dead May Never Die.

## Ejercicio 6

Muestra en la pantalla el resultado de dividir el número 81 entre 9.

## Ejercicio 7

Escribe un programa que calcule la diferencia entre los números 6 y -81 y muestre la respuesta en pantalla.

## Ejercicio 8

Escriba un programa que calcule y muestre en pantalla los valores de las siguientes expresiones matemáticas: "3 elevado a la 5" y "-8 dividido por -4".

## Ejercicio 9

Implementa un programa que calcule y muestre en pantalla el valor de la siguiente expresión:


 ```
8 / 2 + 5 - -3 / 2

 ```

No realices ningún cálculo por tu cuenta; tu programa debe realizar todos los cálculos por sí mismo.

## Ejercicio 10

Dada la expresión:

 ```
70 * 3 + 4 / 8 + 2.

```

Coloca paréntesis de manera que ambas sumas (3 + 4) y (8 + 2) se calculen primero. Muestra el resultado en la pantalla.

## Ejercicio 11

Calcula y muestra en pantalla el producto de dos números: 0.39 y 0.22

## Ejercicio 12

Imprime en pantalla la suma de infinitos dividida por 10.

## Ejercicio 13

Realiza una operación que resulte en NaN e imprime el resultado en la pantalla utilizando console.log().

## Ejercicio 14

Muestra en pantalla el resultado de la siguiente operación: "la diferencia entre el cuadrado de cinco y el producto de tres y siete". Coloca los paréntesis de manera que no se viole la regla no-mixed-operators.

## Ejercicio 15

Escribe un programa que imprima en la pantalla:

```

"Khal Drogo's favorite word is "athjahakar""

```

## Ejercicio 16

Escribe un programa que muestre en la pantalla:

```

- Did Joffrey agree?
- He did. He also said "I love using \n".

```

El programa debe usar solo un console.log(), pero el resultado en la pantalla debe verse exactamente como se muestra arriba.

## Ejercicio 17

Muestra en la pantalla:

```

Winter came for the House of Frey.

```
utilizando la concatenación de palabras.

## Ejercicio 18

En JavaScript, puedes "solicitar" y mostrar en pantalla cualquier carácter de la codificación ASCII. Por ejemplo:

```

console.log(String.fromCharCode(63));

```
Esto mostrará en pantalla el carácter con el número 63, que es el signo de interrogación ?. De esta manera, puedes mostrar cualquier carácter.

Encuentra una tabla de códigos ASCII en Internet. Puedes usar búsquedas como "tabla de códigos ASCII" o "ascii codes table". Por lo general, en estas tablas los códigos se muestran en varios sistemas de numeración: decimal, binario, octal y hexadecimal. Nos interesa el código decimal (dec o decimal).

Utilizando el ejemplo anterior y la tabla que encontraste, muestra en pantalla los caracteres ~, ^ y % (cada uno en su propia línea).

Por supuesto, puedes "engañar" las pruebas y simplemente hacer algo como console.log('~'), pero eso no sería interesante.

## Ejercicio 19

Crea una variable llamada motto con el contenido What Is Dead May Never Die!. Imprime el contenido de la variable.

## Ejercicio 20

En el ejercicio se define una variable que contiene una cadena de texto. Reasigna el valor de esta variable y asígnale la misma cadena de texto, pero en orden inverso, es decir, coloca los caracteres de la cadena original en orden inverso.

## Ejercicio 21

Crea una variable que describa literalmente "la cantidad de mis hermanos" y asígnale el valor 2. Imprime el contenido de la variable. Después de una verificación exitosa, compara tu nombre con el nombre utilizado en la solución del profesor.

## Ejercicio 22

Encuentra la variable no declarada en el programa y declárala asignándole el valor 'Dragon';

Después de ejecutar el programa, el resultado en la pantalla debería verse así:

```

Targaryen
and
Dragon

```

## Ejercicio 23

Escribe un programa que tome una cantidad inicial de euros, almacenada en la variable eurosCount, convierta los euros a dólares y los imprima en la pantalla. Luego, convierte el valor obtenido a yuanes e imprímelos en una nueva línea.

Ejemplo de salida para 100 euros:

```

125
863.75

```

## Ejercicio 24

Los sitios web envían constantemente correos electrónicos a sus usuarios. Una tarea típica es enviar automáticamente un correo electrónico personalizado, donde el título contendrá el nombre del usuario. Si en algún lugar de la base de datos del sitio se almacena el nombre de la persona como una cadena, la tarea de generar el título se reduce a la concatenación: por ejemplo, es necesario unir la cadena Hola con la cadena que contiene el nombre.

Escribe un programa que genere el título y el cuerpo del correo electrónico utilizando variables ya definidas, y muestra las cadenas resultantes en la pantalla.

Para el título, utiliza las variables firstname y greeting, seguidas de una coma y un signo de exclamación. Muestra esto en la pantalla en el orden correcto.

Para el cuerpo del correo, utiliza las variables info e intro, asegurándote de que la segunda oración esté en una nueva línea.

El resultado en la pantalla se verá así:

```

Hello, Joffrey!
Here is important information about your account security.
We couldn't verify your mother's maiden name.

```

Realiza la tarea usando solamente dos console.log().

## Ejercicio 25

Crea dos variables con los nombres "primer número" y "segundo número" en inglés, utilizando lowerCamelCase. Asigna el número 11 a la primera variable y -100 a la segunda. Imprime en pantalla el producto de los números almacenados en las variables resultantes.

El código funcionará con cualquier nombre, y nuestro sistema siempre verifica solamente el resultado en pantalla, por lo que la ejecución de esta tarea es responsabilidad tuya.

## Ejercicio 26

Te has encontrado con el siguiente código que muestra la cantidad total de habitaciones en posesión del actual rey:

```
let king = 'King Balon the 6th';
console.log(king + ' has ' + (6 * 17) + ' rooms.');

```
Como puedes ver, estos son números mágicos: no está claro qué significa el 6 y qué significa el 17. Puedes adivinarlo si conoces la historia de la familia real: cada nuevo rey hereda todos los castillos de sus antepasados y construye un nuevo castillo, una copia exacta del castillo de sus padres.

Esta extraña dinastía simplemente está multiplicando castillos idénticos...

Elimina los números mágicos creando nuevas variables y muestra el texto en la pantalla.

Debería verse así:

```
King Balon the 6th has 102 rooms.

```

Los nombres de las variables deben transmitir el significado de los números, pero al mismo tiempo deben ser lo suficientemente cortos y concisos para una lectura cómoda.

Recuerda: el código funcionará con cualquier nombre, y nuestro sistema siempre verifica solamente el resultado en la pantalla, por lo que completar esta tarea es tu responsabilidad.

## Ejercicio 27

Crea una constante llamada army, asígnale el valor "the white walkers" e imprime su valor en la pantalla.

## Ejercicio 28

Muestra en la pantalla la cadena "Do you want to eat, <name>?, donde en lugar de <name>" se debe utilizar la constante stark. La salida debe ser la siguiente:

```
Do you want to eat, Arya?

```

## Ejercicio 29

Muestra en la pantalla el último carácter de la cadena que se encuentra en la constante "name".

## Ejercicio 30

Muestra en pantalla el número -0.304.

## Ejercicio 31

Muestra en la pantalla el valor undefined sin especificarlo explícitamente (sin asignarlo o pasarlo directamente a console.log()). Si no puedes resolverlo, mira la solución del profesor.

## Ejercicio 32

Se te han dado tres constantes con los apellidos de diferentes personas. Crea y muestra en pantalla una sola palabra con los caracteres en el siguiente orden:

     1. El tercer carácter de la primera cadena de texto.
     2. El segundo carácter de la segunda cadena de texto.
     3. El cuarto carácter de la tercera cadena de texto.
     4. El quinto carácter de la segunda cadena de texto.
     5. El tercer carácter de la segunda cadena de texto.

Intenta utilizar interpolación: dentro de las llaves puedes colocar no solamente variables enteras, sino también caracteres individuales utilizando corchetes.

## Ejercicio 33

Muestra en pantalla el resultado de la expresión: 7 - (-8 - -2). Intenta hacer que el número 7 sea una cadena de texto en lugar de un número. Experimenta también con otros números.

## Ejercicio 34

En el código del programa se han definido dos constantes que contienen nombres de empresas. Calcula la longitud total de los nombres en caracteres y muéstrala en pantalla.

## Ejercicio 35

Muestra en pantalla el valor absoluto del número que se encuentra en la constante soldiersCount, utilizando la función Math.abs(). Esta función devuelve el valor absoluto del número pasado como argumento. El valor absoluto de un número es el número en sí sin el signo delante.

```
Math.abs(-3); // 3
Math.abs(3); // 3
Math.abs(0); // 0

```

## Ejercicio 36

Ahora es tu turno de mirar la firma de una función en la documentación y entender cómo usarla. Puedes leer la documentación en español, pero un programador debe ser capaz de leer la documentación en inglés. Utiliza diccionarios o traductores si es necesario. Es mejor acostumbrarse desde el principio y mejorar tus habilidades de lectura en inglés, de lo contrario tendrás dificultades en el futuro.

En Math hay una función llamada ceil(). Estudia su documentación.

Escribe un programa que utilice la función Math.ceil() con la constante number y muestre el resultado en la pantalla.

## Ejercicio 37

Redondea el número almacenado en la constante number a dos decimales y muestra el resultado en pantalla.

## Ejercicio 38

Muestra en pantalla la primera y la última letra de la oración que está almacenada en la constante text, en el siguiente formato:

```
First: N
Last: t

```
Intenta crear solamente una constante en la que se almacene el texto necesario antes de imprimirlo en pantalla. En esta lección, estamos practicando la habilidad de construir una expresión compuesta.

## Ejercicio 39

Calcula programáticamente (no mentalmente) el número mínimo entre 3, 10, 22, -3, 0, y muéstralo en pantalla. Utiliza la función Math.min(), que funciona de manera similar a Math.max().

## Ejercicio 40

La función Math.random() devuelve un número aleatorio entre 0 y 1 con varios dígitos decimales. Pero para atender problemas reales, a veces necesitamos obtener números enteros aleatorios, por ejemplo, en el rango de 0 a 10. Implementa el código que imprime precisamente esos números en la pantalla. Para este problema, necesitarás las funciones Math.random() y Math.round().

Intenta resolver este ejercicio en una sola línea.

## Ejercicio 41

El operador typeof permite determinar el tipo del operando pasado. El nombre del tipo se devuelve como una cadena. Por ejemplo, llamar a typeof 'go go go' devolverá la cadena 'string' (number - número).

```
console.log(typeof 3); // => 'number'

```
Muestra en la pantalla el tipo del valor de la constante motto.

## Ejercicio 42

Imprime en la pantalla la longitud de la cadena text.

## Ejercicio 43

Convierte la cadena text a minúsculas e imprímela en la pantalla.

##Ejercicio 44

Los datos ingresados por los usuarios a menudo contienen espacios en blanco adicionales al principio o al final de la cadena. Por lo general, se eliminan utilizando el método .trim(), por ejemplo, si era: ' hello\n ', ahora es: 'hello'.

Actualiza la variable firstName asignándole el mismo valor, pero procesado con el método .trim(). Imprime en pantalla el resultado obtenido.

## Ejercicio 45

Muestra en la pantalla la primera y última letra de la oración almacenada en la constante text, en el siguiente formato:

```
First: N
Last: t

```
Tu tarea es extraer estos caracteres de la cadena y colocarlos dentro de console.log(), sin utilizar variables intermedias.

## Ejercicio 46

Utiliza el método slice() para obtener una parte de la oración almacenada en la constante text, desde el carácter 5 hasta el carácter 15, inclusive. Luego, procesa la subcadena obtenida con el método .trim() y muestra en pantalla la longitud de la subcadena resultante. Realiza estos métodos en cadena sin crear variables intermedias.

## Ejercicio 47

Implementa una función llamada printMotto() que mostrará en la pantalla la frase "Winter is coming".

```
printMotto(); // => Winter is coming

```

En los ejercicios en los que se requiere implementar una función, no es necesario llamar a esa función. Las pruebas automatizadas se encargarán de llamarla y comprobar su funcionalidad. El ejemplo de llamada anterior se muestra sólo para que entiendas cómo se utilizará tu función.

## Ejercicio 48

Implementa la función sayHurrayThreeTimes(), que devuelve la cadena 'hurray! hurray! hurray!'.

## Ejercicio 49

Completa la función truncate(), que recorta una cadena pasada como parámetro hasta un número específico de caracteres, agrega puntos suspensivos al final y devuelve la cadena resultante. Esta lógica se utiliza a menudo en sitios web para mostrar texto largo de forma abreviada.

La función recibe dos parámetros:

La cadena que se debe recortar
El número de caracteres que se deben conservar
Aquí tienes un ejemplo de cómo debería funcionar la función que escribas:

```
// Pasando el texto directamente
// Recortando el texto, dejando 2 caracteres
truncate('hexlet', 2); // he...

// A través de una variable
const text = 'it works!';
// Recortando el texto, dejando 4 caracteres
truncate(text, 4); // it w...

```

Debes implementar la función truncate() por tu cuenta, en JavaScript no existe una función así. Puedes implementar esta función de diferentes maneras, sólo te daremos una pista. Para resolverlo de esta manera, necesitarás extraer una subcadena de la cadena pasada como primer parámetro de la función. Utiliza el método slice() para hacerlo. Piensa, según la tarea, desde qué índice y hasta qué índice debes extraer la subcadena.

```
const word = 'welcome';
// Puedes pasar los parámetros al método a través de variables
const index = 3;
word.slice(0, indice); // wel

```
Desde el punto de vista del sistema de evaluación, no importa qué método utilices para implementar la función truncate() internamente, lo importante es que cumpla con la tarea planteada.

## Ejercicio 50

Implementa la función getHiddenCard(), que recibe como entrada el número de una tarjeta de crédito (compuesto por 16 dígitos) como una cadena y devuelve su versión oculta, que se puede utilizar en el sitio web para mostrarla. Si la tarjeta original tenía el número 2034399002125581, entonces la versión oculta se verá así ****5581. En otras palabras, la función reemplaza los primeros 12 caracteres por asteriscos. El número de asteriscos se controla mediante el segundo parámetro opcional. El valor predeterminado es 4.

```
// La tarjeta de crédito se pasa como una cadena
getHiddenCard('1234567812345678', 2); // **5678
getHiddenCard('1234567812345678', 3); // ***5678
getHiddenCard('1234567812345678');    // ****5678
getHiddenCard('2034399002121100', 1); // *1100

```

Para completar la tarea, necesitarás el método repeat() de la cadena, que repite la cadena un número determinado de veces.

```
'+'.repeat(5); // +++++
'o'.repeat(3); // ooo

```

## Ejercicio 51

Implementa la función capitalize(), que recibe una cadena no vacía y convierte la primera letra de la primera palabra a mayúscula:

```
const name = 'arya';
console.log(capitalize(name)); // => Arya

```

Para obtener una subcadena (o un carácter) de una cadena, utiliza el método slice():

```
'welcome'.slice(2, 5); // lco

```

Para convertir una cadena a mayúsculas, utiliza el método toUpperCase():


```
'welcome'.toUpperCase(); // WELCOME

```
