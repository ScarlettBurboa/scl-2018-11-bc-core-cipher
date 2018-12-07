![presentation](https://sumel.cl/firma/cabecera2.png)

# Aplicación Web: Cifrado César

Esta sencilla aplicación web puede codificar y decodificar texto en ¡Solo dos pasos! :)

Está pensado para cualquier persona que necesite enviar algún texto codificado o en secreto, ya sea, para organizar una fiesta, también como mensajería secreta para parejas o simplemente por broma y diversión. 

## ¿Cómo funciona?

El usuario deberá ingresar en la aplicación dos valores importantes: 

- La letra, frase o texto a cifrar
- El número de desplazamiento u Offset.

Este último puede parecer ser confuso pero no es así, ya que este elemento es el que nos ayudará a que nuestro texto sea cifrado del todo. 

Observemos el ejemplo de un caso a continuación:

```text
"Un muchacho necesita decirle a esa amiga que ama con todo su corazón lo que siente, pero no se atreve a decirlo ni en persona ni tampoco en un mensaje directo." 

Entonces descubre esta plataforma que además le ayudará a entregar un poco más de misterio a su mensaje ingresando a la aplicación y escribe "Te amo" con un offset de 3, con esto el sitio web le entregará el siguiente resultado "WH DPR"

Nota: Solo esperamos que la respuesta de la chica sea favorable :) 
```

### ¿Cómo hizo el sitio web para entregar este texto codificado?

Muy sencillo, cuando la aplicación  recibe la primera letra como en el ejemplo anterior que fue la "T" la desplaza 3 espacios hacia la derecha en el abecedario por ende la retorna como "W". Siguiendo esta lógica tenemos que: 

![ejemplo](https://sumel.cl/firma/explicacion.png)

Pero este es solo un caso con un offset de 3, el sistema permite que el usuario ingrese su propio número de desplazamiento para hacer más personalizada su experiencia con la aplicación. Si el usuario ingresa un offset de 4 en el caso de otros ejemplos tendríamos estas respuestas. 

- La letra A se cifra como **E**.
- La palabra CASA se cifra como **EYXS**.
- Alfabeto sin cifrar: **A B C D E F G H I J K L M N O P Q R S T U V W X Y Z**
- Alfabeto cifrado: **E F G H I J K L M N O P Q R S T U V W X Y Z A B C D**

De esta manera la aplicación entrega al usuario un mensaje codificado o decodificado solo conociento el offset con el cual se realizó. 

* * *

# Aspectos Técnicos

El diseño del sitio web es sencillo y con enfásis a lo que el usuario necesita realizar que en este caso se trata de cifrar y decifrar texto. Para esto se diseñó un layout simple en donde la información básica y características del sitio se encontraran en la izquierda y por último la acción que el usuario realizaría a la derecha, como se muestra en el siguiente boceto. 

![boceto](https://sumel.cl/firma/LAYOUT.png)

Con respecto al diseño del sitio se escogió uno moderno para llamar la atención del usuario.

#### Tipografía del sitio

Se utilizaron fuentes de Google Fonts las cuales son: 

+ Poppins: Para títulos y subtítulos en sus versiones `400,500,700,900`
+ Noto Sans SC: Para textos generales del sitio en sus versiones `400,500,700`

#### Colores del sitio. 

El color es **todopoderoso**. No solo influencia los sentimientos, sino también las acciones de las personas. Es por esto que se escogieron principalmente estos colores ya que cada uno de ellos inspiran una emoción o acción. En gran medida es el gris el que domina el sitio para luego posicionarse el blanco y por último el rojo. 

A continuación una breve descripción del por qué se utilizaron estos colores y qué lugares especificos del sitio. 

+ **Rojo:** `#E81313` Atrae rápidamente la atención, evoca emociones fuertes e incrementa el apetito; también se asocia con la pasión, la intensidad y el amor. También está relacionado con las alertas ante peligro. (Por eso se utilizó en botones y aspectos de interés del sitio.)
+ **Blanco:** `#FFFFFF` Se relaciona a la pureza, y a lo simple. (Es por esto que en contraste al fondo gris se utilizó en la tipografía este color.)
+ **Gris:** `#282828` Demuestra aspectos profesionales, o para crear un efecto de equilibrio. (Con esto los tonos importantes quedarían más a la vista del usuario.)

```text
Cabe destacar que también pensando en que la mayoría de las interacciones con sitios web son en teléfonos inteligentes se realizó una versión (móvil) que se encuentra bajo el concepto de Responsive Design, la cual indica al menos en este proyecto que bajo los 900px de ancho de un dispositivo el aspecto y estructura del sitio web se adapten para que el usuario pueda interactuar de mejor forma en la plataforma.
```
# Código

El proyecto fue realizado bajo el concepto _paso a paso_ el cual consiste en realizar una lista de tareas _To Do_ la cual irá detallando a modo simple los movimientos del usuario en la aplicación y con esto se llegó a la siguiente lista. 

+ Realizar estructura básica `<html>` (Esta ya estaba realizada por defecto).
+ Conectar `index.js`, `cipher.js` y `style.css` (Esta ya estaba realizada por defecto).
+ Estructura básica de `<input>`, `<textarea>` y `<button>` que necesita la interfaz para funcionar.
+ A cada `<input>`, `<textarea>` y `<button>` de la estructura agregar un `id` de indentificación para funciones.
+ Agregar eventos o acciones mediante el uso del DOM especificamente el método `.addEventListener`. (Esto en el `index.js`) y dentro de este evento guardar la información ingresada por el usuario mediante variables las cuales serían utilizadas en parámetros por el archivo `chiphe.js`.
+ Dichas variables se utilizan dentro de un ciclo `for` el cual tendrá dentro condiciones las cuales deberá cumplir
    > Tomar una letra y leerla para devolver la posición de un caracter en unicode
    > Ese numero posteriormente deberá ser incluido en una fórmula matemática para obtener el valor final, y posteriormente usar ese valor con el numero de desplazamiento para obtener una posición y un valor que se conventirán nuevamente en un carácter. 
    > Para esto se utilizaron en la acción de codificar los métodos `.charCodeAt` el cual devuelve la posición de un caracter en unicode y el método `String.fromCharCode` que toma números enteros decimales que representan valores ASCII. y lo devuelve en una cadena. 
    > En el caso del decifrado solo cambia un ítem matemático en donde en el cifrado se suma el offset mientras que en el decifrado se resta logrando todo lo contrario. 
    > En este último se utilizaron dos métodos más que son el `.push` el cual va agregando los elementos a medida que van apareciendo y el método `.join` el cual le indica con qué elemento debe ser separado, y como en este caso necesitamos que las palabras estén unidas a excepción del espacio, no se ingresó ningún valor al join.
    + Y por último mostrar ese resultado en el HTML con el uso del DOM.

