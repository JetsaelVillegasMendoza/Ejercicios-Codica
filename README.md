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


